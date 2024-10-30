import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());



// Task 1 Endpoint: /task1
app.get('/task1', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/plain');  // Make sure content-type is correct
  res.status(200).send('hello world');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});