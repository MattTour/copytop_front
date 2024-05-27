# On récupère la dernière version de node
FROM node:latest
# Creation du dossier `app`
WORKDIR /app
# Copie des dependances du package.json dans le dossier `app`
COPY package.json .
#Installation des dependances dans le container
RUN npm install
#Copie des fichiers de l'app dans le dossier `app`
COPY . .
#Ouverture du port 3000
EXPOSE 3000
#Commande de lancement du container pour le frontend React.js
CMD ["npm", "start"]