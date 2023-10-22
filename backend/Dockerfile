# on part de l'image officielle de node
FROM node:14

# on crée et se place dans le répertoire de travail
WORKDIR /usr/src/app

# On installe les dépendances de l'application (express, mongoose, body-parser)
RUN npm install express mongoose body-parser

# On copie les fichiers necessaires pour le backend dans le répertoire de travail (ici app.js)
COPY . .

# Le port sur lequel l'application va écouter
EXPOSE 3000

# la commande pour lander le bakcend (API)
CMD [ "node", "app.js" ]
