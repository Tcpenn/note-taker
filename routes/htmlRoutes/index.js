const path = require('path');
const router = require('express').Router();

// get route for notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// get route for index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/'));
});

module.exports = router;