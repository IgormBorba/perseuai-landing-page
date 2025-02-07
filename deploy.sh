#!/bin/bash

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GREEN}Iniciando deploy da aplicação...${NC}"

# Verifica se está rodando como root
if [[ $EUID -ne 0 ]]; then
   echo -e "${RED}Este script precisa ser executado como root${NC}" 
   exit 1
fi

# Instalação de dependências
echo -e "${GREEN}Instalando dependências...${NC}"
apt update
apt install -y nginx

# Configurando SWAP para evitar problemas de memória
echo -e "${GREEN}Configurando SWAP...${NC}"
if [ ! -f /swapfile ]; then
    fallocate -l 1G /swapfile
    chmod 600 /swapfile
    mkswap /swapfile
    swapon /swapfile
    echo '/swapfile none swap sw 0 0' >> /etc/fstab
fi

# Instalando Node.js versão LTS
echo -e "${GREEN}Instalando Node.js...${NC}"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Criando diretório da aplicação
echo -e "${GREEN}Configurando diretórios...${NC}"
mkdir -p /var/www/startup-website
chown -R www-data:www-data /var/www/startup-website

# Configurando Nginx
echo -e "${GREEN}Configurando Nginx...${NC}"
cp nginx.conf /etc/nginx/sites-available/startup-website
ln -sf /etc/nginx/sites-available/startup-website /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Configurando logs do Nginx
echo -e "${GREEN}Configurando logs do Nginx...${NC}"
touch /var/log/nginx/error.log
touch /var/log/nginx/access.log
chmod 644 /var/log/nginx/error.log
chmod 644 /var/log/nginx/access.log
chown www-data:adm /var/log/nginx/error.log
chown www-data:adm /var/log/nginx/access.log

# Build da aplicação
echo -e "${GREEN}Instalando dependências do Node.js e buildando a aplicação...${NC}"
npm ci
npm install -g vite
export PATH="$PATH:/usr/local/bin"
npm run build

# Movendo arquivos buildados
echo -e "${GREEN}Movendo arquivos para diretório de produção...${NC}"
rm -rf /var/www/startup-website/*
cp -r dist/* /var/www/startup-website/
chown -R www-data:www-data /var/www/startup-website
chmod -R 755 /var/www/startup-website

# Reiniciando Nginx
echo -e "${GREEN}Reiniciando Nginx...${NC}"
nginx -t && systemctl restart nginx

echo -e "${GREEN}Deploy concluído com sucesso!${NC}"
echo -e "${GREEN}Sua aplicação deve estar disponível em: http://perseuai.online${NC}" 