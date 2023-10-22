# rendu-docker souleman moreau

### Voici mon rendu docker, j'ai normalement respecté toutes les consignes ! Bonne correction.

## Prérequis

- docker
- git
- curl
- un terminal

<!-- ecrire en rouge -->

```diff
- Attention : si vous avez déjà un serveur qui tourne sur le port 80, il faudra le stopper avant de lancer le docker-compose
```

## Installation

### Etape 1

faire un git clone du projet (dans le dossier de votre choix)

### Etape 2

se placer dans le dossier du projet (cd)
s'assurer que rien n'est lancé sur votre localhost sur le port 80

### Etape 3 : lancer le docker-compose

lancer la commande suivante :

```bash
docker-compose up  --build -d
```

### Etape 4 : peupler la bdd

lancer les commandes suivante pour peupler la bdd avec les 4:

```bash

curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 1, "title": "If you dont have a mobile website, you dont have a website.", "description": "In 2014, 50% of worldwide traffic uses mobile. A website must adapt the content for mobile.", "likes": 0, "dislikes": 0, "tags": ["ui"]}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 2, "title": "Leave the code cleaner than you found it.", "description": "From Clean Code: always leave the code cleaner than it was before.", "likes": 0, "dislikes": 0, "tags": ["craftsmanship", "clean code"]}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 3, "title": "Never say : \"Ive done, it works on my machine !\" #itworksonmymachine", "likes": 0, "dislikes": 0, "tags": []}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 4, "title": "Always use === in JavaScript!", "likes": 0, "dislikes": 0, "tags": ["javascript"]}'
```

```diff
- Attention : il faut au moins une regle dans le front pour pouvoir en ajouter d'autres il est donc necessaire de peupler la bdd avec au moins une regle
```

# Dernière étape : Tester le site!

rendez vous sur http://localhost pour voir le site (frontend)

rendez vous sur http://localhost/api pour voir l'api (backend)
