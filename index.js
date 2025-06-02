// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const feedbackRoutes = require('./routes/feedback');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/feedback', feedbackRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('Server running on 5000')))
  .catch(err => console.error(err));
