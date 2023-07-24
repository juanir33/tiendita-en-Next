import { db } from "."
import { IProduct } from "../interfaces";
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

