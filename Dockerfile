# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instalar dependências com flags para otimização
RUN npm install --no-audit --no-fund --production=false \
    && npm cache clean --force

# Copiar arquivos do projeto
COPY . .

# Build do projeto e limpar cache
RUN npm run build \
    && rm -rf node_modules \
    && npm install --no-audit --no-fund --production=true \
    && npm cache clean --force

# Production stage
FROM nginx:alpine

# Instalar curl para healthcheck e limpar cache
RUN apk add --no-cache curl \
    && rm -rf /var/cache/apk/*

# Copiar a configuração do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:80 || exit 1

# Comando para iniciar o nginx
CMD ["nginx", "-g", "daemon off;"] 