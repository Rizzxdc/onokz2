const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// SET VIEW ENGINE
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ============ ROUTES ============
app.get('/', (req, res) => {
  res.render('index', { domain: 'onokz2.vercel.app' });
});

app.get('/jenis-sepeda', (req, res) => {
  res.render('jenis-sepeda', { domain: 'onokz2.vercel.app' });
});

app.get('/tools', (req, res) => {
  res.render('tools', { domain: 'onokz2.vercel.app' });
});

app.get('/komponen', (req, res) => {
  res.render('komponen', { domain: 'onokz2.vercel.app' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
});