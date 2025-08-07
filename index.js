const express = require('express');
const app = express();
const port = 3000;

app.get('/api/test', (req, res) => {
  res.json({ message: 'Test API is working!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
