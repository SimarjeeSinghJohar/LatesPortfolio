#!/bin/bash

# Quick Domain Deployment Script for Portfolio
# This automates the deployment process to your own domain

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
cat << "EOF"
╔═══════════════════════════════════════════════════╗
║     Portfolio Domain Deployment Wizard            ║
║     Deploy to your own domain in minutes!        ║
╚═══════════════════════════════════════════════════╝
EOF
echo -e "${NC}"

# Collect information
echo -e "${YELLOW}📝 Please provide the following information:${NC}"
echo ""

read -p "Your domain name (e.g., example.com): " DOMAIN
read -p "Your server IP address: " SERVER_IP
read -p "SSH username (default: root): " SSH_USER
SSH_USER=${SSH_USER:-root}

echo ""
echo -e "${YELLOW}SendGrid Configuration:${NC}"
read -p "SendGrid API Key: " SENDGRID_KEY
read -p "SendGrid Verified Sender Email: " SENDGRID_SENDER

echo ""
echo -e "${GREEN}═══════════════════════════════════════════${NC}"
echo -e "${GREEN}Configuration Summary:${NC}"
echo -e "${GREEN}═══════════════════════════════════════════${NC}"
echo "Domain:           $DOMAIN"
echo "Server IP:        $SERVER_IP"
echo "SSH User:         $SSH_USER"
echo "SendGrid Sender:  $SENDGRID_SENDER"
echo -e "${GREEN}═══════════════════════════════════════════${NC}"
echo ""

read -p "Is this correct? (yes/no): " CONFIRM
if [[ ! $CONFIRM =~ ^[Yy](es)?$ ]]; then
    echo -e "${RED}❌ Deployment cancelled${NC}"
    exit 1
fi

echo ""
echo -e "${BLUE}🚀 Starting deployment...${NC}"
echo ""

# Create deployment script for remote server
DEPLOY_SCRIPT=$(cat << 'REMOTE_SCRIPT'
#!/bin/bash
set -e

echo "📦 Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com | sh
    systemctl start docker
    systemctl enable docker
fi

echo "📦 Installing Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
fi

echo "📦 Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    apt update
    apt install -y nginx
fi

echo "📦 Installing Certbot..."
if ! command -v certbot &> /dev/null; then
    apt install -y certbot python3-certbot-nginx
fi

echo "📥 Cloning repository..."
if [ -d "LatesPortfolio" ]; then
    cd LatesPortfolio/Portfolio
    git pull
else
    git clone https://github.com/SimarjeeSinghJohar/LatesPortfolio.git
    cd LatesPortfolio/Portfolio
fi

echo "⚙️ Configuring environment..."
cat > .env.local << EOF
SENDGRID_API_KEY=SENDGRID_KEY_PLACEHOLDER
SENDGRID_VERIFIED_SENDER=SENDGRID_SENDER_PLACEHOLDER
EOF

echo "🐳 Deploying Docker container..."
chmod +x deploy.sh
./deploy.sh deploy

echo "🌐 Configuring Nginx..."
cat > /etc/nginx/sites-available/portfolio << 'NGINX_CONFIG'
server {
    listen 80;
    server_name DOMAIN_PLACEHOLDER www.DOMAIN_PLACEHOLDER;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Proxy to Docker container
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

    # Enable gzip
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
NGINX_CONFIG

ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

nginx -t
systemctl restart nginx
systemctl enable nginx

echo "🔒 Setting up SSL with Let's Encrypt..."
certbot --nginx -d DOMAIN_PLACEHOLDER -d www.DOMAIN_PLACEHOLDER --non-interactive --agree-tos --email admin@DOMAIN_PLACEHOLDER --redirect

echo "🔥 Configuring firewall..."
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
echo "y" | ufw enable || true

echo "✅ Deployment complete!"
REMOTE_SCRIPT
)

# Replace placeholders
DEPLOY_SCRIPT="${DEPLOY_SCRIPT//DOMAIN_PLACEHOLDER/$DOMAIN}"
DEPLOY_SCRIPT="${DEPLOY_SCRIPT//SENDGRID_KEY_PLACEHOLDER/$SENDGRID_KEY}"
DEPLOY_SCRIPT="${DEPLOY_SCRIPT//SENDGRID_SENDER_PLACEHOLDER/$SENDGRID_SENDER}"

# Execute on remote server
echo -e "${BLUE}📡 Connecting to server...${NC}"
ssh $SSH_USER@$SERVER_IP "bash -s" << EOF
$DEPLOY_SCRIPT
EOF

echo ""
echo -e "${GREEN}╔═══════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║             🎉 Deployment Successful!             ║${NC}"
echo -e "${GREEN}╚═══════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}📝 Next Steps:${NC}"
echo ""
echo "1. ${BLUE}Update DNS Records at your domain registrar:${NC}"
echo "   ┌────────────────────────────────────────────"
echo "   │ Type: A    Name: @      Value: $SERVER_IP"
echo "   │ Type: A    Name: www    Value: $SERVER_IP"
echo "   └────────────────────────────────────────────"
echo ""
echo "2. ${BLUE}Wait for DNS propagation${NC} (can take up to 48 hours)"
echo ""
echo "3. ${BLUE}Visit your portfolio:${NC}"
echo "   🌐 https://$DOMAIN"
echo "   🌐 https://www.$DOMAIN"
echo ""
echo "4. ${BLUE}Test your contact form${NC} to ensure SendGrid is working"
echo ""
echo -e "${GREEN}✨ Your portfolio is now live on your domain!${NC}"
echo ""
echo -e "${YELLOW}💡 Useful commands:${NC}"
echo "   ssh $SSH_USER@$SERVER_IP                    # Connect to server"
echo "   cd LatesPortfolio/Portfolio && ./deploy.sh logs   # View logs"
echo "   sudo systemctl status nginx                 # Check Nginx"
echo "   docker ps                                   # Check containers"
echo ""
