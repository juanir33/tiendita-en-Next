import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import { Product } from "../../../models";
import { IProduct } from "../../../interfaces";

type Data =
	| {
			msg: string;
	  }
	| IProduct;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
	if(req.method !== 'GET') return res.status(400).json({msg: 'Bad request'}); 

	const { slug } = req.query;
	await db.connect();

	const product = await Product.findOne({ slug }).lean();

	await db.disconnect();
	if (!product) return res.status(404).json({ msg: "Producto no encontrado" });

	return res.status(200).json(product);
}
