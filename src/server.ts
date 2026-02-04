import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Docker + TypeScript');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
