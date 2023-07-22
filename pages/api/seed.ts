
import { db } from '../../database';
import { Product } from '../../models';
import { initialData } from '../../database/products';
import type { NextApiRequest, NextApiResponse } from 'next'


type Data = {
	msg: string
}

export default async function  handlerSeed (req: NextApiRequest, res: NextApiResponse<Data>) {


    if(process.env.NODE_ENV === 'production') {
		return res.status(401).json({msg: 'No tiene acceso a esta solicitud'})
	};

	await db.connect();
	await Product.deleteMany();
	await Product.insertMany( initialData.products)

	await db.disconnect();
	



	res.status(200).json({ msg: 'Proceso exitoso' })
}