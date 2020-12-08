const mongoose = require('mongoose');
const Joi =require('joi');

const JoiSchema = Joi.object({
    productName : Joi.string().required().min(3).max(30),
    productPrice: Joi.number(),
    productColor: Joi.string(),
    productMaterial : Joi.string()
})

//JOI Validation code
/*const validatePrd = JoiSchema.validate({
    "productName" : "Mechanical Pencil",
    "productPrice": "dfdfdf",
    "productColor": "Gree",
    "productMaterial" : "Plastic"
})
console.log(validatePrd.error);*/

const productSchema = new mongoose.Schema({
    productName : {type: String},
    productPrice: {type: Number},
    productColor: {type: String},
    productMaterial : {type: String}
})

const ProductModel = mongoose.model('ProductModel', productSchema);

module.exports = ProductModel;


