// server/services/ai.js
const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

async function analyzeFeedback(text) {
  const prompt = `Classify the sentiment (positive, neutral, negative) and category (complaint, praise, suggestion, other) of this feedback:\n"${text}"`;

  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 60,
  });

  const output = res.data.choices[0].text.trim();
  const [sentiment, category] = output.split(",").map(s => s.trim().toLowerCase());

  return { sentiment, category };
}

module.exports = analyzeFeedback;
