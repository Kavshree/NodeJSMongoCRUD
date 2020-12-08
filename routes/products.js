const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const ProductModel = require('../models/products.model');

app.use('ProductModel', ProductModel);


mongoose.connect('mongodb://localhost/playground')
.then(() => console.log(`connected to DB...`)).catch((err) => { console.log(err)})

router.get('/', (req,res) => {
    ProductModel.find().select({productName: 1, _id: 0}).then(result => {
        res.send(result)
    })
    .catch((err) => { res.send(err) })
})

router.post('/', (req,res) => {
    let requestData = req.body;
    const product = new ProductModel(requestData)
    product.save()
    .then((result) => { res.send(result)  }) 
    .catch((err) => { res.send(err) })
})

router.put('/:id',(req,res) => {
    ProductModel.update({_id: req.params.id}, req.body)
    .then((result) => { res.send(result)})
    .catch((err) => res.send(err))
})

router.delete('/:id', (req,res) => {
    ProductModel.remove({_id: req.params.id})
    .then((result) => { res.send(result) })
    .catch((err) => res.send(err))
})

module.exports = router;