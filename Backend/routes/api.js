const express = require('express');
const axios = require('axios');
const Jedi = require('../models/jedi');

const router = express.Router();
const baseURL = 'https://swapi.dev/api';

router.use('/:resource', async (req, res, next) => {
  const { resource } = req.params;
  if (['films', 'people', 'planets', 'species', 'starships', 'vehicles'].includes(resource)) {
    const query = req.originalUrl.replace(`/${resource}`, '');
    const url = `${baseURL}/${resource}${query}`;

    try {
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      res.status(error.response ? error.response.status : 500).send(error.message);
    }
  } else {
    next();
  }
});


router.post('/jedis', async (req, res) => {
  const jedi = new Jedi(req.body);

  try {
    const result = await jedi.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/jedis', async (req, res) => {
  try {
    const jedis = await Jedi.find();
    res.json(jedis);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/jedis/:id', async (req, res) => {
  try {
    const jedi = await Jedi.findById(req.params.id);
    if (!jedi) return res.status(404).json({ message: 'Jedi not found' });
    res.json(jedi);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/jedis/:id', async (req, res) => {
  try {
    const jedi = await Jedi.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!jedi) return res.status(404).json({ message: 'Jedi not found' });
    res.json(jedi);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/jedis/:id', async (req, res) => {
  try {
    const jedi = await Jedi.findByIdAndDelete(req.params.id);
    if (!jedi) return res.status(404).json({ message: 'Jedi not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
