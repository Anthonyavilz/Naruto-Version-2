const express = require('express');
const {createJu, getJu, modifyJu, deleteJu} = require('./controllers/userJustu');

const app = express();

app.use(express.json());

const narutoUrl = '/api/naruto';
app.post(narutoUrl, createJu);
app.get(narutoUrl, getJu);
app.put(`${narutoUrl}/:id`, modifyJu);
app.delete(`${narutoUrl}/:id`, deleteJu);


const port = 8760;
app.listen(port, () => console.log(`Running on port ${port}`));