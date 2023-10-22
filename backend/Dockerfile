FROM node:14

# Définissez le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Installez les dépendances de l'application
RUN npm install express mongoose body-parser

# Copiez tous les fichiers de l'application dans le répertoire de travail
COPY . .

# Exposez le port sur lequel l'application sera accessible
EXPOSE 3000

# Définissez la commande pour exécuter l'application
CMD [ "node", "app.js" ]
