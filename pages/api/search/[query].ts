import type { NextApiRequest, NextApiResponse } from 'next'
import { IProduct } from '../../../interfaces';
import { db } from '../../../database';
import { Product } from '../../../models';

type Data = {
	msg: string
} | IProduct[]

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

	if( req.method !== 'GET' ) return res.status(400).json({msg: 'Bad request'});

	let { query = ''} = req.query;
    
	
	if( query.length <  3 ) {
		return res.status(404).json({msg: 'Debe escribir al menos 3 caracteres'})
	}

	await db.connect();

	const products = await Product.find({$text: { $search: `${query}`}}).lean();
    if( products.length < 1) return res.json({msg : 'No hay productos con ese nombre'});
	return res.json(products)


}