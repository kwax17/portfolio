const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/contact.html'));
});


module.exports = router;