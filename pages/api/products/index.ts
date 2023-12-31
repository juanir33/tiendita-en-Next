import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../interfaces";

import { SHOP_CONSTANTS, db } from "../../../database";
import { Product } from "../../../models";

type Data =
	| {
			msg: string;
	  }
	| IProduct[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case "GET":
			return getProducts(req, res);
		default:
			return res.status(400).json({ msg: "Bad request" });
	}
}

async function getProducts(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { gender = 'all' } = req.query;
	
	let condition = {};

	if(gender !== 'all' && SHOP_CONSTANTS.validGender.includes(`${gender}`)) {
		condition = {gender};
	}


	await db.connect();

	const products = await Product.find(condition).select("title slug images price inStock -_id").lean();

	await db.disconnect();

	return res.status(200).json(products);
}
