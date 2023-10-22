# rendu-docker


# peupler la bdd
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 1, "title": "If you dont have a mobile website, you dont have a website.", "description": "In 2014, 50% of worldwide traffic uses mobile. A website must adapt the content for mobile.", "likes": 0, "dislikes": 0, "tags": ["ui"]}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 2, "title": "Leave the code cleaner than you found it.", "description": "From Clean Code: always leave the code cleaner than it was before.", "likes": 0, "dislikes": 0, "tags": ["craftsmanship", "clean code"]}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 3, "title": "Never say : \"Ive done, it works on my machine !\" #itworksonmymachine", "likes": 0, "dislikes": 0, "tags": []}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 4, "title": "Always use === in JavaScript!", "likes": 0, "dislikes": 0, "tags": ["javascript"]}'


# lancer le serveur

