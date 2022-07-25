const express = require('express');
const notesRoute = require('./assets/routes/notes');
const indexRoute = require('./assets/routes/index');
const PORT = 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', notesRoute);
app.use('/', indexRoute);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
  });