'use strict';

const express = require('express');
const router = express.Router();
const { MenuItemTable } = require('../models');

router.get('/menu-item', handleGetAll);
router.get('/menu-item/:id', handleGetOne);
router.post('/menu-item', handlePost);
router.put('/menu-item/:id', handlePut);
router.delete('/menu-item/:id', handleDelete);

async function handleGetAll(req, res) {
  let records = await MenuItemTable.read();
  res.status(200).json({ results: records });
}

async function handleGetOne(req, res) {
  let records = await MenuItemTable.read(req.params.id);
  res.status(200).json({ results: records });
}

async function handlePost(req, res) {
  let record = await MenuItemTable.create(req.body);
  res.status(200).json(record);
}

async function handlePut(req, res) {
  let record = await MenuItemTable.update(req.params.id, req.body);
  res.status(200).json(record);
}

async function handleDelete(req, res) {
  let result = await MenuItemTable.delete(req.params.id);
  console.log('RESULTS FROM COLLECTION DELETE:', req.params.id, result);
  res.status(200).json({ result });
}

module.exports = router;