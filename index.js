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
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Edukasi Sepeda',
    domain: 'always-rizz.vercel.app'
  });
});

app.get('/jenis-sepeda', (req, res) => {
  res.render('pages/jenis-sepeda', { 
    title: 'Jenis-Jenis Sepeda',
    domain: 'always-rizz.vercel.app'
  });
});

app.get('/tools', (req, res) => {
  res.render('pages/tools', { 
    title: 'Tools & Kegunaan',
    domain: 'always-rizz.vercel.app'
  });
});

app.get('/komponen', (req, res) => {
  res.render('pages/komponen', { 
    title: 'Komponen Sepeda',
    domain: 'always-rizz.vercel.app'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
      <head><title>404 - Halaman Tidak Ditemukan</title></head>
      <body style="font-family: Arial; text-align: center; padding: 50px;">
        <h1>404</h1>
        <p>Halaman yang Anda cari tidak ditemukan</p>
        <a href="/" style="color: #2a6b8f;">← Kembali ke Menu Utama</a>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});