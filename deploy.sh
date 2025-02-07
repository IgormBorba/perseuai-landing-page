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
apt install -y nginx nodejs npm

# Criando diretório da aplicação
echo -e "${GREEN}Configurando diretórios...${NC}"
mkdir -p /var/www/startup-website
chown -R www-data:www-data /var/www/startup-website

# Configurando Nginx
echo -e "${GREEN}Configurando Nginx...${NC}"
cp nginx.conf /etc/nginx/sites-available/startup-website
ln -sf /etc/nginx/sites-available/startup-website /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Build da aplicação
echo -e "${GREEN}Instalando dependências do Node.js e buildando a aplicação...${NC}"
npm install
npm run build

# Movendo arquivos buildados
echo -e "${GREEN}Movendo arquivos para diretório de produção...${NC}"
cp -r dist/* /var/www/startup-website/

# Reiniciando Nginx
echo -e "${GREEN}Reiniciando Nginx...${NC}"
systemctl restart nginx

echo -e "${GREEN}Deploy concluído com sucesso!${NC}"
echo -e "${GREEN}Sua aplicação deve estar disponível em: http://seu-dominio.com${NC}" 