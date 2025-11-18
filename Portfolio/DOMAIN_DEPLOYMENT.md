# Deploy Portfolio to Your Own Domain 🌐

This guide walks you through deploying your Dockerized portfolio to your own domain.

## Prerequisites

- ✅ Domain name purchased (e.g., simarjeetsinghjohar.com)
- ✅ VPS/Cloud server (DigitalOcean, AWS, etc.)
- ✅ Docker installed on server
- ✅ Your portfolio repository

---

## Option 1: VPS Deployment (Recommended - Full Control)

### Step 1: Get a VPS Server

#### Recommended Providers:
- **DigitalOcean** - $6/month droplet (easiest)
- **Linode** - $5/month
- **Vultr** - $5/month
- **AWS EC2** - Free tier eligible
- **Hetzner** - $4/month

### Step 2: Initial Server Setup

SSH into your server:
```bash
ssh root@your-server-ip
```

Update system and install Docker:
```bash
# Update packages
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

# Verify installations
docker --version
docker-compose --version
```

Create a non-root user (security best practice):
```bash
# Create user
adduser portfolio
usermod -aG sudo portfolio
usermod -aG docker portfolio

# Switch to new user
su - portfolio
```

### Step 3: Clone Your Repository

```bash
# Clone your repository
git clone https://github.com/SimarjeeSinghJohar/LatesPortfolio.git
cd LatesPortfolio/Portfolio

# Create environment file
cp .env.local.example .env.local
nano .env.local
```

Add your SendGrid credentials:
```bash
SENDGRID_API_KEY=your_actual_sendgrid_api_key_here
SENDGRID_VERIFIED_SENDER=connect@simarjeetsinghjohar.com
```

### Step 4: Deploy with Docker

```bash
# Make deploy script executable
chmod +x deploy.sh

# Deploy in production mode
./deploy.sh deploy
```

Your app is now running on port 3000!

### Step 5: Setup Nginx Reverse Proxy

Install Nginx:
```bash
sudo apt install nginx -y
```

Create Nginx configuration:
```bash
sudo nano /etc/nginx/sites-available/portfolio
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

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

        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

Enable the site:
```bash
# Test configuration
sudo nginx -t

# Enable site
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Restart Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### Step 6: Configure DNS

Go to your domain registrar (Namecheap, GoDaddy, etc.) and add these DNS records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | your-server-ip | 3600 |
| A | www | your-server-ip | 3600 |

**Note:** DNS changes can take 1-48 hours to propagate.

### Step 7: Setup SSL with Let's Encrypt (FREE)

Install Certbot:
```bash
sudo apt install certbot python3-certbot-nginx -y
```

Get SSL certificate:
```bash
# Replace with your domain
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts:
1. Enter your email
2. Agree to terms
3. Choose to redirect HTTP to HTTPS (recommended)

Auto-renewal is configured automatically! Test it:
```bash
sudo certbot renew --dry-run
```

Your site is now live at **https://yourdomain.com** 🎉

---

## Option 2: Cloud Platform Deployment (Easier, But Less Control)

### A. Vercel (Easiest - Free Tier)

**Note:** API routes work on Vercel!

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd Portfolio
   vercel
   ```

3. **Add Environment Variables:**
   ```bash
   vercel env add SENDGRID_API_KEY
   vercel env add SENDGRID_VERIFIED_SENDER
   ```

4. **Add Custom Domain:**
   - Go to Vercel Dashboard
   - Select your project
   - Go to Settings → Domains
   - Add your domain
   - Update DNS as instructed

### B. Netlify (Easy - Free Tier)

1. **Connect GitHub:**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Configure Build:**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Add Environment Variables:**
   - Go to Site Settings → Environment Variables
   - Add `SENDGRID_API_KEY`
   - Add `SENDGRID_VERIFIED_SENDER`

4. **Add Custom Domain:**
   - Go to Domain Settings
   - Add custom domain
   - Update DNS records as shown

### C. Railway (Docker-friendly - Free $5 credit)

1. **Connect GitHub:**
   - Go to https://railway.app
   - Click "New Project"
   - Deploy from GitHub repo

2. **Configure:**
   - Railway auto-detects Docker
   - Add environment variables
   - Assign custom domain

### D. Render (Docker-friendly - Free Tier)

1. **Create Web Service:**
   - Go to https://render.com
   - New → Web Service
   - Connect GitHub repository

2. **Configure:**
   - Environment: Docker
   - Add environment variables
   - Add custom domain

---

## Post-Deployment Checklist

### Security
- [ ] SSL certificate installed (HTTPS)
- [ ] Firewall configured (UFW)
  ```bash
  sudo ufw allow 80/tcp
  sudo ufw allow 443/tcp
  sudo ufw allow 22/tcp
  sudo ufw enable
  ```
- [ ] SSH key authentication enabled
- [ ] Root login disabled
- [ ] Regular updates scheduled

### Performance
- [ ] Gzip compression enabled
- [ ] Browser caching configured
- [ ] CDN setup (optional - Cloudflare)
- [ ] Database optimization (if applicable)

### Monitoring
- [ ] Uptime monitoring (UptimeRobot, Pingdom)
- [ ] Log monitoring setup
- [ ] Error tracking (Sentry)
- [ ] Analytics (Google Analytics, Plausible)

### Backups
- [ ] Automated backups configured
- [ ] .env.local backed up securely
- [ ] Database backups (if applicable)

---

## Domain Verification for SendGrid

Since your contact form uses SendGrid, verify your domain:

1. **Go to SendGrid Dashboard:**
   - Settings → Sender Authentication
   - Click "Authenticate Your Domain"

2. **Choose DNS Host:**
   - Select your domain registrar
   - Follow instructions to add DNS records

3. **Add DNS Records:**
   Add these CNAME records (values will be provided by SendGrid):
   ```
   s1._domainkey.yourdomain.com → s1.domainkey.u12345.wl.sendgrid.net
   s2._domainkey.yourdomain.com → s2.domainkey.u12345.wl.sendgrid.net
   ```

4. **Verify:**
   - Click "Verify" in SendGrid
   - May take 24-48 hours

---

## Updating Your Deployed Application

### On VPS:
```bash
# SSH into server
ssh portfolio@your-server-ip

# Navigate to project
cd LatesPortfolio/Portfolio

# Pull latest changes
git pull origin main

# Rebuild and restart
./deploy.sh restart prod
```

### On Cloud Platforms:
- Simply push to GitHub
- Platform auto-deploys (if configured)

---

## Troubleshooting

### Domain not loading:
```bash
# Check DNS propagation
dig yourdomain.com

# Check Nginx status
sudo systemctl status nginx

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log

# Check Docker container
docker ps
docker logs portfolio-app
```

### SSL certificate issues:
```bash
# Renew certificate
sudo certbot renew

# Check certificate status
sudo certbot certificates
```

### Container not starting:
```bash
# Check logs
docker logs portfolio-app

# Restart container
./deploy.sh restart prod

# Check environment variables
docker exec portfolio-app env | grep SENDGRID
```

### Port 3000 already in use:
```bash
# Find process
sudo lsof -i :3000

# Kill process
sudo kill -9 <PID>

# Or change port in docker-compose.prod.yml
```

---

## Performance Optimization

### 1. Setup Cloudflare (Free CDN & DDoS Protection)

1. **Add site to Cloudflare:**
   - Go to https://cloudflare.com
   - Add your domain
   - Update nameservers at your registrar

2. **Configure SSL:**
   - SSL/TLS → Full (Strict)
   - Enable "Always Use HTTPS"

3. **Enable Performance Features:**
   - Speed → Optimization → Enable Auto Minify
   - Caching → Configuration → Browser Cache TTL → 4 hours

### 2. Setup Caching in Nginx

Edit Nginx config:
```nginx
# Add to server block
location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

Reload Nginx:
```bash
sudo nginx -s reload
```

---

## Cost Breakdown

### Budget Option ($6-8/month):
- Domain: $1-2/month ($12-24/year)
- VPS: $5-6/month (DigitalOcean Droplet)
- SSL: Free (Let's Encrypt)
- **Total: ~$6-8/month**

### Premium Option ($0-10/month):
- Domain: $1-2/month
- Vercel/Netlify: Free tier (with limitations)
- SSL: Included
- CDN: Included
- **Total: ~$1-2/month**

---

## Example for Your Domain: simarjeetsinghjohar.com

### DNS Records:
```
Type  Name  Value              TTL
A     @     your-server-ip     3600
A     www   your-server-ip     3600
```

### Nginx Config:
```nginx
server_name simarjeetsinghjohar.com www.simarjeetsinghjohar.com;
```

### SSL Command:
```bash
sudo certbot --nginx -d simarjeetsinghjohar.com -d www.simarjeetsinghjohar.com
```

---

## Quick Start Script

Save this as `deploy-to-domain.sh`:

```bash
#!/bin/bash

echo "🚀 Portfolio Domain Deployment"
echo "=============================="
echo ""

# Variables
read -p "Enter your domain (e.g., example.com): " DOMAIN
read -p "Enter your server IP: " SERVER_IP
read -p "Enter your SendGrid API Key: " SENDGRID_KEY
read -p "Enter your SendGrid verified sender: " SENDGRID_SENDER

echo ""
echo "📋 Configuration Summary:"
echo "Domain: $DOMAIN"
echo "Server IP: $SERVER_IP"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
fi

echo "✅ Deploying to $DOMAIN..."

# SSH and deploy
ssh root@$SERVER_IP << EOF
    # Setup Docker
    curl -fsSL https://get.docker.com | sh
    
    # Clone repository
    git clone https://github.com/SimarjeeSinghJohar/LatesPortfolio.git
    cd LatesPortfolio/Portfolio
    
    # Configure environment
    echo "SENDGRID_API_KEY=$SENDGRID_KEY" > .env.local
    echo "SENDGRID_VERIFIED_SENDER=$SENDGRID_SENDER" >> .env.local
    
    # Deploy
    chmod +x deploy.sh
    ./deploy.sh deploy
    
    # Install Nginx
    apt install nginx certbot python3-certbot-nginx -y
    
    # Configure Nginx
    cat > /etc/nginx/sites-available/portfolio << 'NGINX'
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
NGINX
    
    ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
    rm /etc/nginx/sites-enabled/default
    systemctl restart nginx
    
    # Get SSL
    certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
    
    echo "✅ Deployment complete!"
EOF

echo ""
echo "🎉 Your portfolio is now live!"
echo "Visit: https://$DOMAIN"
echo ""
echo "📝 Next steps:"
echo "1. Update DNS records at your registrar:"
echo "   A record: @ → $SERVER_IP"
echo "   A record: www → $SERVER_IP"
echo "2. Wait for DNS propagation (up to 48 hours)"
echo "3. Visit your domain!"
```

Make it executable and run:
```bash
chmod +x deploy-to-domain.sh
./deploy-to-domain.sh
```

---

## Support

Need help? Check these resources:
- **Documentation:** DOCKER_DEPLOYMENT.md
- **GitHub Issues:** https://github.com/SimarjeeSinghJohar/LatesPortfolio/issues
- **Email:** simarjitjohar319@gmail.com

---

**Your portfolio is ready to go live! 🚀**
