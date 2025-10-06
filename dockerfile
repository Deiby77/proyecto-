# Usa una imagen base ligera de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos que contienen las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto en el que la app correrá (ajusta si es necesario)
EXPOSE 3000

# Comando para arrancar la aplicación
CMD ["npm", "start"]
