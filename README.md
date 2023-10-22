# docker-rendering souleman moreau

### Here is my docker rendering, I have normally respected all the instructions! Good correction.
<span style="color: green;">The changes in the base app related to API requests are in /frontend/src/App.jsx (the first two useEffect lines 15 to 74)</span>

## Prerequisites

- docker
- git
- curl
- a terminal

<!-- write in red -->

```diff
- Warning: if you already have a server running on port 80, you will need to stop it before launching the docker-compose
```

## Installation

### Step 1

do a git clone of the project (in the folder of your choice)

### Step 2

go to the project folder (cd)
make sure nothing is running on your localhost on port 80

### Step 3: launch the docker-compose

run the following command:

```bash
docker-compose up  --build -d
```

### Step 4: populate the database

run the following commands to populate the database with the 4:

```bash

curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 1, "title": "If you dont have a mobile website, you dont have a website.", "description": "In 2014, 50% of worldwide traffic uses mobile. A website must adapt the content for mobile.", "likes": 0, "dislikes": 0, "tags": ["ui"]}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 2, "title": "Leave the code cleaner than you found it.", "description": "From Clean Code: always leave the code cleaner than it was before.", "likes": 0, "dislikes": 0, "tags": ["craftsmanship", "clean code"]}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 3, "title": "Never say : \"Ive done, it works on my machine !\" #itworksonmymachine", "likes": 0, "dislikes": 0, "tags": []}' &&
curl -X POST http://localhost/api/add -H "Content-Type: application/json" -d '{"id": 4, "title": "Always use === in JavaScript!", "likes": 0, "dislikes": 0, "tags": ["javascript"]}'
```

```diff
- Warning: you need at least one rule in the front to be able to add others, so it is necessary to populate the database with at least one rule
```
