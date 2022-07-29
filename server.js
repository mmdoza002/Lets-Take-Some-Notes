const express = require('express');
const indexRoutes = require('./routes/html/index');
const notesRoutes = require('./routes/api/notes');
const PORT = 3001;
const app = express();

// const app = express();
// const PORT = process.env.PORT || 3001;
// const notesRoutes = require('./Main/routes/api/notes');
// const indexRoutes = require('./Main/routes/html/index');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', notesRoutes);
app.use('/', indexRoutes);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`);
  });