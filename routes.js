// server/routes/feedback.js
const express = require('express');
const Feedback = require('../models/Feedback');
const analyzeFeedback = require('../services/ai');

const router = express.Router();

router.post('/', async (req, res) => {
  const { feedback } = req.body;
  const aiResult = await analyzeFeedback(feedback);
  const newFeedback = await Feedback.create({ text: feedback, ...aiResult });
  res.json(aiResult);
});

module.exports = router;
