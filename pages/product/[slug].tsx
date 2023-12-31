import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { ItemCounter } from "../../components/ui/ItemCounter";
import { NextPage } from "next";
import { IProduct } from "../../interfaces";

interface Props {
	product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
	return (
		<ShopLayout title={product.title} pageDescription={product.description}>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={7}>
					<ProductSlideshow images={product.images} />
				</Grid>

				<Grid item xs={12} sm={5}>
					<Box display="flex" flexDirection="column">
						{/* titulos */}
						<Typography variant="h1" component="h1">
							{product.title}
						</Typography>
						<Typography variant="subtitle1" component="h2">{`$${product.price}`}</Typography>

						{/* Cantidad */}
						<Box sx={{ my: 2 }}>
							<Typography variant="subtitle2">Cantidad</Typography>
							<ItemCounter />
							<SizeSelector
								// selectedSize={ product.sizes[2] }
								sizes={product.sizes}
							/>
						</Box>

						{product.inStock > 0 ? (
							<Button color="secondary" className="circular-btn">
								Agregar al carrito
							</Button>
						) : (
							<Chip label="No hay disponibles" color="error" variant="outlined" />
						)}

						{/* Descripción */}
						<Box sx={{ mt: 3 }}>
							<Typography variant="subtitle2">Descripción</Typography>
							<Typography variant="body2">{product.description}</Typography>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</ShopLayout>
	);
};

export default ProductPage;

import { GetStaticPaths } from "next";
import { getAllProductsSlug, getProductBySlug } from "../../database";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	let products = await getAllProductsSlug();

	return {
		paths: products.map((product) => ({ params: { slug: product.slug } })),
		fallback: "blocking",
	};
};

import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string };

	const product = await getProductBySlug(slug);

	if (!product) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {
			product,
		},
		revalidate: 60 * 60 * 24,
	};
};
