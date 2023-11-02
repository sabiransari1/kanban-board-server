const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connection = require('./db');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get('/', (req, res) => {
  try {
    return res.status(200).send('Kanban Board server...');
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

app.use('task', taskRoutes);

app.listen(process.env.PORT || 7070, () => {
  try {
    connection();

    console.log(
      `Application is running on port ${process.env.PORT || 7070}...`
    );
  } catch (error) {
    console.log({ error: error.message });
  }
});
