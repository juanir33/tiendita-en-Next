import type { NextPage } from "next";
import { Typography } from "@mui/material";

import { ShopLayout } from "../components/layouts";

import { ProductList } from "../components/products";
import { useProducts } from "../hooks";
import { HomeSkeleton } from "../components/ui";
import UiProvider from "../context/UiProvider";

const Home: NextPage = () => {
	const { products, isLoading } = useProducts("/products");
	

	return (
		
		<ShopLayout title={"Teslo-Shop - Home"} pageDescription={"Encuentra los mejores productos de Teslo aquí"}>
			<Typography variant="h1" component="h1">
				Tienda
			</Typography>
			<Typography variant="h2" sx={{ mb: 1 }}>
				Todos los productos
			</Typography>
			{isLoading ? <HomeSkeleton /> : <ProductList products={products} />}
		</ShopLayout>
		
	);
};

export default Home;
