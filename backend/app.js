// impotation des dépendances
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Création de l'application express
const app = express();

// Middleware pour analyser le corps des requêtes HTTP
app.use(bodyParser.json());

// Connexion à MongoDB avec Mongoose (le nom de la base de données est mydatabase) le port est 27017 ( port mongo par défaut) et le nom de l'hôte est mongo (nom du service dans le docker-compose)
mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Définition du schéma de la base de données
const RuleSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  likes: Number,
  dislikes: Number,
  tags: Array,
});

// Création du modèle
const Rule = mongoose.model('Rule', RuleSchema);

// Route get hello world pour tester l'API
app.get('/api/', (req, res) => {
  res.send('Hello world');
});

// Route pour ajouter une règle
app.post('/api/add', async (req, res) => {
    const newRule = new Rule(req.body);
    try {
        const savedRule = await newRule.save();
        res.status(201).json(savedRule);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Route pour récupérer tous les règles
app.get('/api/all', async (req, res) => {
  try {
    const rules = await Rule.find();
    res.json(rules);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route pour push une liste de règles en ecrasant les anciennes
app.post('/api/push', async (req, res) => {
  try {
    // suppression de toutes les règles
    await Rule.deleteMany({});

    // insertion des nouvelles règles
    const rules = await Rule.insertMany(req.body);

    // réponse
    res.json(rules);

    // gestion des erreurs
  } catch (err) {
    res.status(400).json(err);
  }
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
