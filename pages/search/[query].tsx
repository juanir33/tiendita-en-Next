import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductList } from "../../components/products";
import { useState } from "react";
import { GetServerSideProps, NextPage } from "next";
import { getProductsByTerm } from "../../database";
import { IProduct } from "../../interfaces";


interface Props {
    products: IProduct[];
    foundProducts: boolean;
    query: string;
}


const SearchPage : NextPage<Props> = ({products, foundProducts, query }) => {
	console.log("🚀 ~ file: [query].tsx:18 ~ products:", products)
	
	return (
		<ShopLayout title={"Teslo-Shop - Home"} pageDescription={"Encuentra los mejores productos de Teslo aquí"}>
			<Typography variant="h1" component="h1">
				Buscar productos
			</Typography>

			{foundProducts ? (
				<Typography variant="h2" sx={{ mb: 1 }} textTransform="capitalize">
					Término: {query}
				</Typography>
			) : (
				<Box display="flex">
					<Typography variant="h2" sx={{ mb: 1 }}>
						No encontramos ningún produto
					</Typography>
					<Typography variant="h2" sx={{ ml: 1 }} color="secondary" textTransform="capitalize">
						{query}
					</Typography>
				</Box>
			)}
			<ProductList products={products} page="../../products" />
		</ShopLayout>
	);
};





export const getServerSideProps : GetServerSideProps = async ({params}) =>{

	const { query = '' } = params as { query : string}

	if ( query.length === 0){
		return {
			redirect :{
				destination: '/',
				permanent: true,
			}
		}
	}

	let products = await getProductsByTerm(query);
	const foundProducts = products.length > 0;

	if( !foundProducts ){
		products = await getProductsByTerm('shirt');
		console.log("🚀 ~ file: [query].tsx:67 ~ constgetServerSideProps:GetServerSideProps= ~ products:", products)
	}

	return {
		props: {
		products, foundProducts, query}
	}

}





export default SearchPage;