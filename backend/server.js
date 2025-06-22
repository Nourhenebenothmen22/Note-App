const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./Config/db');
const NotesRoutes = require('./routes/NotesRoutes');

dotenv.config();
connectdb();

const app = express();

app.use(express.json()); // << INDISPENSABLE pour lire les JSON envoyés

app.use('/api', NotesRoutes); // Toutes les routes commencent par /api

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
