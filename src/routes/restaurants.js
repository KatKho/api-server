'use strict';

const express = require('express');
const router = express.Router();
const { RestaurantTable } = require('../models');

router.get('/restaurant', handleGetAll);
router.get('/restaurant/:id', handleGetOne);
router.post('/restaurant', handlePost);
router.put('/restaurant/:id', handlePut);
router.delete('/restaurant/:id', handleDelete);

async function handleGetAll(req, res) {
  let records = await RestaurantTable.read();
  res.status(200).json({ results: records });
}

async function handleGetOne(req, res) {
  let records = await RestaurantTable.read(req.params.id);
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  let record = await RestaurantTable.create(req.body);
  res.status(200).json(record);
}

async function handlePut(req, res) {
  let record = await RestaurantTable.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await RestaurantTable.delete(req.params.id);
  console.log('RESULTS FROM COLLECTION DELETE:', req.params.id, result);
  res.status(200).json({ result });
}

module.exports = router;