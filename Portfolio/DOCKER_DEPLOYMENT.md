# Docker Deployment Guide

## Prerequisites

- Docker installed (https://docs.docker.com/get-docker/)
- Docker Compose installed (https://docs.docker.com/compose/install/)
- `.env.local` file with your SendGrid credentials

## Quick Start

### Development Build

```bash
# Build and run in development mode
docker-compose up --build
```

Visit http://localhost:3000

### Production Build

```bash
# Build and run in production mode
docker-compose -f docker-compose.prod.yml up --build -d
```

Visit http://localhost (port 80)

## Detailed Instructions

### 1. Prepare Environment Variables

Ensure your `.env.local` file exists with:

```bash
SENDGRID_API_KEY=your_actual_sendgrid_api_key
SENDGRID_VERIFIED_SENDER=your-verified-email@yourdomain.com
```

### 2. Build the Docker Image

```bash
# Build only
docker build -t portfolio:latest .

# Or with docker-compose
docker-compose build
```

### 3. Run the Container

#### Option A: Using Docker directly
```bash
docker run -p 3000:3000 \
  --env-file .env.local \
  --name portfolio-app \
  portfolio:latest
```

#### Option B: Using Docker Compose (Development)
```bash
docker-compose up -d
```

#### Option C: Using Docker Compose (Production)
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### 4. View Logs

```bash
# Docker
docker logs portfolio-app

# Docker Compose
docker-compose logs -f

# Production
docker-compose -f docker-compose.prod.yml logs -f
```

### 5. Stop the Container

```bash
# Docker
docker stop portfolio-app

# Docker Compose
docker-compose down

# Production
docker-compose -f docker-compose.prod.yml down
```

## Management Commands

### Restart the Application
```bash
docker-compose restart
# or
docker-compose -f docker-compose.prod.yml restart
```

### Update the Application
```bash
# Pull latest code
git pull

# Rebuild and restart
docker-compose up --build -d
# or
docker-compose -f docker-compose.prod.yml up --build -d
```

### View Container Status
```bash
docker-compose ps
# or
docker ps
```

### Execute Commands Inside Container
```bash
docker exec -it portfolio-app sh
# or
docker-compose exec portfolio sh
```

### Clean Up

```bash
# Remove containers and networks
docker-compose down

# Remove containers, networks, and volumes
docker-compose down -v

# Remove images
docker rmi portfolio:latest
```

## Production Deployment on VPS/Cloud

### 1. SSH into your server
```bash
ssh user@your-server-ip
```

### 2. Install Docker and Docker Compose
```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. Clone your repository
```bash
git clone https://github.com/SimarjeeSinghJohar/LatesPortfolio.git
cd LatesPortfolio/Portfolio
```

### 4. Create .env.local file
```bash
nano .env.local
# Add your SendGrid credentials
```

### 5. Deploy
```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

### 6. Setup Nginx Reverse Proxy (Optional but recommended)

Install Nginx:
```bash
sudo apt update
sudo apt install nginx
```

Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and restart:
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 7. Setup SSL with Let's Encrypt (Recommended)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

## Troubleshooting

### Container won't start
```bash
# Check logs
docker-compose logs

# Check if port 3000 is already in use
sudo lsof -i :3000
```

### Build fails
```bash
# Clean build cache
docker builder prune

# Rebuild without cache
docker-compose build --no-cache
```

### Environment variables not working
```bash
# Verify .env.local exists
cat .env.local

# Check if variables are loaded
docker-compose config
```

### Can't connect to the app
```bash
# Check if container is running
docker ps

# Check network
docker network ls
docker network inspect portfolio-network
```

## Health Check

The container includes a health check that runs every 30 seconds:

```bash
# Check health status
docker inspect --format='{{.State.Health.Status}}' portfolio-app
```

## Performance Optimization

### Enable BuildKit for faster builds
```bash
export DOCKER_BUILDKIT=1
docker-compose build
```

### Limit container resources
Add to docker-compose.yml:
```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
    reservations:
      cpus: '0.25'
      memory: 256M
```

## Security Best Practices

1. ✅ Never commit `.env.local` to git
2. ✅ Use non-root user (already configured in Dockerfile)
3. ✅ Keep base images updated
4. ✅ Use specific version tags instead of `latest`
5. ✅ Implement rate limiting for contact form
6. ✅ Use HTTPS in production
7. ✅ Regularly update dependencies

## Monitoring

### View resource usage
```bash
docker stats portfolio-app
```

### Setup log rotation
Already configured in `docker-compose.prod.yml`:
```yaml
logging:
  driver: "json-file"
  options:
    max-size: "10m"
    max-file: "3"
```

## Backup

### Backup logs
```bash
docker logs portfolio-app > backup-$(date +%Y%m%d).log
```

## Support

For issues or questions:
- GitHub: https://github.com/SimarjeeSinghJohar/LatesPortfolio/issues
- Email: simarjitjohar319@gmail.com
