'use strict';

const express = require('express');
const router = express.Router();
const { FoodModel } = require('../models'); 

// Create a new food item
router.post('/', async (req, res, next) => {
  try {
    const { name, type } = req.body;
    const food = await FoodModel.create({ name, type });
    res.status(201).json(food);
  } catch (error) {
    next(error);
  }
});

// Get all food items
router.get('/', async (req, res, next) => {
  try {
    const foods = await FoodModel.findAll();
    res.status(200).json(foods);
  } catch (error) {
    next(error);
  }
});

// Get one food item by ID
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await FoodModel.findByPk(id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    res.status(200).json(food);
  } catch (error) {
    next(error);
  }
});

// Update a food item by ID
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, type } = req.body;
    const food = await FoodModel.findByPk(id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    food.name = name;
    food.type = type;
    await food.save();
    res.status(200).json(food);
  } catch (error) {
    next(error);
  }
});

// Delete a food item by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await FoodModel.findByPk(id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    await food.destroy();
    res.status(204).json(food);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
