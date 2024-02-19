import express from 'express';
import cors from "cors";
import { getEvents } from './eventPrompt.js';
const app = express();
const port = 3001;

app.use(cors());
app.use(express.urlencoded());

app.use(express.json());

app.post('/search_events', async (req, res) => {
  const { interest, location, date } = req.body;
  const result = await getEvents(interest, location, date);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
