const express = require('express');
const router = express.Router();

// Түр зуурын хэрэглэгчид (жирийн болон админ)
const users = [
  { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { email: 'user@example.com', password: 'user123', role: 'user' }
];

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Хэрэглэгчийг хайж олох
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Имэйл эсвэл нууц үг буруу байна' });
  }

  if (user.role === 'admin') {
    return res.json({ message: 'Админ амжилттай нэвтэрлээ', role: 'admin' });
  } else {
    return res.json({ message: 'Хэрэглэгч амжилттай нэвтэрлээ', role: 'user' });
  }
});

module.exports = router;
