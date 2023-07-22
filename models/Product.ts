
import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";




export const productSchema = new Schema({
	
    description: {type : String, required: true},
	images: [{type: String}],
    inStock: {type: Number, required: true, default: 0},
    price: {type: Number, required: true},
    sizes: [{type: String, enum: { values: ['XS','S','M','L','XL','XXL','XXXL'], message: '{VALUE} no es un tamanio valido' } , required: true, }],
    slug:  {type : String, required: true},
    tags:  [{type: String}],
    title: {type : String, required: true},
    type: {type: String, enum: { values: ['shirts','pants','hoodies','hats'], message: '{VALUE} no es un tipo valido' } , required: true, },
    gender: {type: String, enum: { values: ['men','women','kid','unisex'], message: '{VALUE} no es un tipo valido' } , required: true, },
}, {
    timestamps: true
})



const Product : Model<IProduct> = mongoose.models.Product || model('Product', productSchema);


export default Product;