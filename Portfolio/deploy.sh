#!/bin/bash

# Portfolio Docker Deployment Script
# This script helps deploy the portfolio application using Docker

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# Function to check if Docker is installed
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        echo "Visit: https://docs.docker.com/get-docker/"
        exit 1
    fi
    print_success "Docker is installed"
}

# Function to check if Docker Compose is installed
check_docker_compose() {
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        echo "Visit: https://docs.docker.com/compose/install/"
        exit 1
    fi
    print_success "Docker Compose is installed"
}

# Function to check if .env.local exists
check_env_file() {
    if [ ! -f .env.local ]; then
        print_error ".env.local file not found!"
        print_info "Creating .env.local from .env.local.example..."
        
        if [ -f .env.local.example ]; then
            cp .env.local.example .env.local
            print_info "Please edit .env.local and add your SendGrid credentials"
            print_info "Run: nano .env.local"
            exit 1
        else
            print_error ".env.local.example not found. Cannot create .env.local"
            exit 1
        fi
    fi
    print_success ".env.local file exists"
}

# Function to validate environment variables
validate_env() {
    source .env.local
    
    if [ -z "$SENDGRID_API_KEY" ] || [ "$SENDGRID_API_KEY" = "your_sendgrid_api_key_here" ]; then
        print_error "SENDGRID_API_KEY is not set in .env.local"
        exit 1
    fi
    
    if [ -z "$SENDGRID_VERIFIED_SENDER" ] || [ "$SENDGRID_VERIFIED_SENDER" = "your-verified-email@yourdomain.com" ]; then
        print_error "SENDGRID_VERIFIED_SENDER is not set in .env.local"
        exit 1
    fi
    
    print_success "Environment variables are configured"
}

# Function to build the Docker image
build() {
    print_info "Building Docker image..."
    docker-compose build
    print_success "Docker image built successfully"
}

# Function to start the application
start() {
    MODE=${1:-dev}
    
    if [ "$MODE" = "prod" ]; then
        print_info "Starting application in PRODUCTION mode..."
        docker-compose -f docker-compose.prod.yml up -d
    else
        print_info "Starting application in DEVELOPMENT mode..."
        docker-compose up -d
    fi
    
    print_success "Application started successfully"
    print_info "Waiting for application to be ready..."
    sleep 5
    
    if [ "$MODE" = "prod" ]; then
        print_success "Application is running at http://localhost"
    else
        print_success "Application is running at http://localhost:3000"
    fi
}

# Function to stop the application
stop() {
    MODE=${1:-dev}
    
    if [ "$MODE" = "prod" ]; then
        print_info "Stopping production application..."
        docker-compose -f docker-compose.prod.yml down
    else
        print_info "Stopping development application..."
        docker-compose down
    fi
    
    print_success "Application stopped"
}

# Function to view logs
logs() {
    MODE=${1:-dev}
    
    if [ "$MODE" = "prod" ]; then
        docker-compose -f docker-compose.prod.yml logs -f
    else
        docker-compose logs -f
    fi
}

# Function to restart the application
restart() {
    MODE=${1:-dev}
    print_info "Restarting application..."
    stop "$MODE"
    start "$MODE"
}

# Function to show status
status() {
    print_info "Container status:"
    docker-compose ps
}

# Function to clean up
clean() {
    print_info "Cleaning up Docker resources..."
    docker-compose down -v
    docker system prune -f
    print_success "Cleanup completed"
}

# Function to deploy
deploy() {
    print_info "Starting full deployment..."
    check_docker
    check_docker_compose
    check_env_file
    validate_env
    build
    start "prod"
    print_success "Deployment completed!"
}

# Main script
case "$1" in
    build)
        check_docker
        check_docker_compose
        build
        ;;
    start)
        check_docker
        check_docker_compose
        check_env_file
        start "${2:-dev}"
        ;;
    stop)
        stop "${2:-dev}"
        ;;
    restart)
        restart "${2:-dev}"
        ;;
    logs)
        logs "${2:-dev}"
        ;;
    status)
        status
        ;;
    clean)
        clean
        ;;
    deploy)
        deploy
        ;;
    *)
        echo "Portfolio Docker Deployment Script"
        echo ""
        echo "Usage: $0 {build|start|stop|restart|logs|status|clean|deploy} [dev|prod]"
        echo ""
        echo "Commands:"
        echo "  build              Build the Docker image"
        echo "  start [mode]       Start the application (dev or prod)"
        echo "  stop [mode]        Stop the application (dev or prod)"
        echo "  restart [mode]     Restart the application (dev or prod)"
        echo "  logs [mode]        View application logs (dev or prod)"
        echo "  status             Show container status"
        echo "  clean              Clean up Docker resources"
        echo "  deploy             Full deployment (build + start in prod mode)"
        echo ""
        echo "Examples:"
        echo "  $0 start           Start in development mode"
        echo "  $0 start prod      Start in production mode"
        echo "  $0 deploy          Deploy to production"
        echo "  $0 logs prod       View production logs"
        exit 1
        ;;
esac

exit 0
