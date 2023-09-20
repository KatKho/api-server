'use strict';

const express = require('express');
const router = express.Router();
const { ClothesModel } = require('../models'); 

// Create a new clothes item
router.post('/', async (req, res, next) => {
  try {
    const { name, type } = req.body;
    const clothes = await ClothesModel.create({ name, type });
    res.status(201).json(clothes);
  } catch (error) {
    console.error('Error in POST route handler:', error);
    next(error);
  }
});

// Get all clothes items
router.get('/', async (req, res, next) => {
  try {
    const clothes = await ClothesModel.findAll();
    res.status(200).json(clothes);
  } catch (error) {
    next(error);
  }
});

// Get one clothes item by ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const clothes = await ClothesModel.findByPk(id);
    if (!clothes) {
      return res.status(404).json({ message: 'Clothes not found' });
    }
    res.status(200).json(clothes);
  } catch (error) {
    next(error);
  }
});

// Update a clothes item by ID
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;
    const clothes = await ClothesModel.findByPk(id);
    if (!clothes) {
      return res.status(404).json({ message: 'Clothes not found' });
    }
    clothes.name = name;
    clothes.type = type;
    await clothes.save();
    res.status(200).json(clothes);
  } catch (error) {
    next(error);
  }
});

// Delete a clothes item by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const clothes = await ClothesModel.findByPk(id);
    if (!clothes) {
      return res.status(404).json({ message: 'Clothes not found' });
    }
    await clothes.destroy();
    res.status(204).json(clothes);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
