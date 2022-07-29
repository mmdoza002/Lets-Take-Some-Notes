const express = require('express');
const indexRoutes = require('./routes/html/index');
const notesRoutes = require('./routes/api/notes');
const PORT = 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', notesRoutes);
app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
  });