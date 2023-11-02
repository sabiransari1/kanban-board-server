const express = require('express');
const taskRoutes = express.Router();
const boardModel = require('../models/boardModel');

taskRoutes.get('/', async (req, res) => {
  try {
    let boards = await boardModel.find({});

    console.log(boards);

    // return res.status(200).send({ boards });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

module.exports = taskRoutes;
