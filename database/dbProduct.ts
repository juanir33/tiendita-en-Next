import { Rtt } from "@mui/icons-material";
import { db } from "."
import { IProduct, SearchProduct } from "../interfaces";
import { Product } from "../models";



export const getProductBySlug = async (slug: string ) : Promise<IProduct | null> => {

	await db.connect();
    
	const product = await Product.findOne({ slug }).lean();

	await db.disconnect();

	if( !product ) return null;

    return JSON.parse(JSON.stringify(product));
}
export const getProducts = async ( ) : Promise<IProduct[]> => {

	await db.connect();
    
	const product = await Product.find().lean();

	await db.disconnect();

	

    return JSON.parse(JSON.stringify(product));
}

interface ProductSlug {
	slug: string;
}
export const getAllProductsSlug = async () : Promise<ProductSlug[]>=>{
    await db.connect();

	const productsSlug = await Product.find().select( 'slug -_id').lean();

	await db.disconnect();
	return productsSlug
}



export const getProductsByTerm = async (term: string) : Promise<IProduct[]> => {
    
	term.trim().toLowerCase();

    await db.connect();

	const products = await Product.find({ $text : { $search : term}}).select('title images price inStock slug -_id').lean();

	await db.disconnect();
	return products

}
