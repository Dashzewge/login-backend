const express = require('express');
const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend ажиллаж байна!');
});

app.use('/api', userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} `);
});
