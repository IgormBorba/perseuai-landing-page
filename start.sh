#!/bin/bash

# Cores para output
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${GREEN}Iniciando a aplicação...${NC}"

# Verifica se o Docker está instalado
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker não está instalado. Por favor, instale o Docker primeiro.${NC}"
    exit 1
fi

# Verifica se o Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}Docker Compose não está instalado. Por favor, instale o Docker Compose primeiro.${NC}"
    exit 1
fi

# Para containers existentes
echo -e "${GREEN}Parando containers existentes...${NC}"
docker-compose down

# Constrói e inicia os containers
echo -e "${GREEN}Construindo e iniciando a aplicação...${NC}"
docker-compose up --build -d

echo -e "${GREEN}Aplicação iniciada com sucesso!${NC}"
echo -e "${GREEN}Acesse: http://localhost${NC}"
echo -e "${GREEN}Para ver os logs: docker-compose logs -f${NC}"
echo -e "${GREEN}Para parar a aplicação: docker-compose down${NC}" 