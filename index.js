const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes - PASTIKAN INI
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Edukasi Sepeda',
    domain: 'onok2.vercel.app'
  });
});

app.get('/jenis-sepeda', (req, res) => {
  res.render('pages/jenis-sepeda', { 
    title: 'Jenis-Jenis Sepeda',
    domain: 'onok2.vercel.app'
  });
});

app.get('/tools', (req, res) => {
  res.render('pages/tools', { 
    title: 'Tools & Kegunaan',
    domain: 'onok2.vercel.app'
  });
});

app.get('/komponen', (req, res) => {
  res.render('pages/komponen', { 
    title: 'Komponen Sepeda',
    domain: 'onok2.vercel.app'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Halaman tidak ditemukan');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});