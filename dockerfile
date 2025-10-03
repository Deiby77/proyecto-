# Usa imagen oficial de Node.js (elige una versión estable, aquí 18-alpine para imagen ligera)
FROM node:18-alpine

# Establece directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia archivos de dependencias
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia todo el proyecto al contenedor
COPY . .

# Expone el puerto que usa tu app (por ejemplo 3000)
EXPOSE 3000

# Comando para arrancar la app
CMD ["npm", "start"]
