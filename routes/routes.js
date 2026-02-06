const express = require('express');
const router = express.Router();
const path = require('path');

// Define routes
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../views', 'practice.html')));
router.get('/aboutus', (req, res) => res.sendFile(path.join(__dirname, '../views', 'aboutus.html')));
router.get('/admin', (req, res) => res.sendFile(path.join(__dirname, '../views', 'admin.html')));
router.get('/arts', (req, res) => res.sendFile(path.join(__dirname, '../views', 'arts.html')));
router.get('/books', (req, res) => res.sendFile(path.join(__dirname, '../views', 'books.html')));
router.get('/contactus', (req, res) => res.sendFile(path.join(__dirname, '../views', 'contactuss.html')));
router.get('/fictional', (req, res) => res.sendFile(path.join(__dirname, '../views', 'fictional.html')));
router.get('/literature', (req, res) => res.sendFile(path.join(__dirname, '../views', 'literature.html')));
router.get('/social', (req, res) => res.sendFile(path.join(__dirname, '../views', 'social.html')));

module.exports = router;
