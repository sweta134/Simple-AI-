import express from 'express';
import { config } from 'dotenv';
import OpenAI from 'openai';
import cors from 'cors';

const app = express();
const port = 3000;

config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

app.use(express.json());
app.use(cors()); // Use cors middleware

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.input;

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    const modelResponse = chatCompletion.choices[0].message.content;
    res.json({ response: modelResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
