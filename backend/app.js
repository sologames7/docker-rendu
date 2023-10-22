const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware pour analyser le corps des requêtes HTTP
app.use(bodyParser.json());

// Connexion à MongoDB
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

// Route get hello world
app.get('/api/', (req, res) => {
  res.send('Hello world');
});

// Route pour ajouter un Rule
app.post('/api/add', async (req, res) => {
  const newRule = new Rule(req.body);
  try {
    const savedRule = await newRule.save();
    res.status(201).json(savedRule);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route pour récupérer tous les Rule
app.get('/api/all', async (req, res) => {
  try {
    const rules = await Rule.find();
    res.json(rules);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route pour modifier un Rule
app.patch('/api/edit/:id', async (req, res) => {
    try {
      const updatedRule = await Rule.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true }
      );
      res.json(updatedRule);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  

// Route pour supprimer un Rule
app.delete('/api/delete/:id', async (req, res) => {
  try {
    const deletedRule = await Rule.findByIdAndDelete(req.params.id);
    res.json(deletedRule);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
