import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.get('/astros', async (req, res) => {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const response = await fetch('http://api.open-notify.org/astros.json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ type: 'error', message: error.message });
  }
});

app.listen(port, () => console.log(`Proxy server running on port ${port}`));