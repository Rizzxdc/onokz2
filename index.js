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

// ============ ROUTES ============
app.get('/', (req, res) => {
  try {
    res.render('index', { 
      title: 'Edukasi Sepeda',
      domain: 'onok2.vercel.app'
    });
  } catch (error) {
    console.log('Error di home:', error);
    res.send('Error di home: ' + error.message);
  }
});

app.get('/jenis-sepeda', (req, res) => {
  try {
    res.render('pages/jenis-sepeda', { 
      title: 'Jenis-Jenis Sepeda',
      domain: 'onok2.vercel.app'
    });
  } catch (error) {
    console.log('Error di jenis-sepeda:', error);
    res.send('Error di jenis-sepeda: ' + error.message);
  }
});

app.get('/tools', (req, res) => {
  try {
    res.render('pages/tools', { 
      title: 'Tools & Kegunaan',
      domain: 'onok2.vercel.app'
    });
  } catch (error) {
    console.log('Error di tools:', error);
    res.send('Error di tools: ' + error.message);
  }
});

app.get('/komponen', (req, res) => {
  try {
    res.render('pages/komponen', { 
      title: 'Komponen Sepeda',
      domain: 'onok2.vercel.app'
    });
  } catch (error) {
    console.log('Error di komponen:', error);
    res.send('Error di komponen: ' + error.message);
  }
});

// 404
app.use((req, res) => {
  res.status(404).send('404 - Halaman tidak ditemukan');
});

// Error handler
app.use((err, req, res, next) => {
  console.error('ERROR:', err);
  res.status(500).send('Error: ' + err.message);
});

app.listen(PORT, () => {
  console.log(`🚀 Server jalan di http://localhost:${PORT}`);
});