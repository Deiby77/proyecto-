# Usa una imagen base de Node
FROM node:18-alpine

# Establece directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del proyecto
COPY . .

# Expone el puerto (ajusta si usas otro)
EXPOSE 3000

# Comando para arrancar la app
CMD ["npm", "start"]
