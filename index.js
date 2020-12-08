const express = require('express');
const app = express();
app.use(express.json());
const products = require('./routes/products');

app.use('/api/products', products);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server up and listening at ${PORT}`))