# Docker Quick Start 🐳

This guide shows you how to quickly deploy your portfolio using Docker.

## One-Command Deployment

```bash
# Clone, configure, and deploy
git clone https://github.com/SimarjeeSinghJohar/LatesPortfolio.git
cd LatesPortfolio/Portfolio
cp .env.local.example .env.local
# Edit .env.local with your SendGrid credentials
./deploy.sh deploy
```

## Development Mode

```bash
./deploy.sh start
# Visit http://localhost:3000
```

## Production Mode

```bash
./deploy.sh start prod
# Visit http://localhost
```

## All Commands

| Command | Description |
|---------|-------------|
| `./deploy.sh build` | Build Docker image |
| `./deploy.sh start` | Start in development mode |
| `./deploy.sh start prod` | Start in production mode |
| `./deploy.sh stop` | Stop the application |
| `./deploy.sh restart` | Restart the application |
| `./deploy.sh logs` | View application logs |
| `./deploy.sh status` | Show container status |
| `./deploy.sh clean` | Clean up Docker resources |
| `./deploy.sh deploy` | Full production deployment |

## Manual Docker Commands

If you prefer not to use the script:

### Development
```bash
docker-compose up --build
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

## Requirements

- Docker installed
- Docker Compose installed
- `.env.local` file with SendGrid credentials

## Full Documentation

See [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md) for complete documentation.
