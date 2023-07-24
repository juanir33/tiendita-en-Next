import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow, SizeSelector } from "../../components/products";
import { initialData } from "../../database/products";
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

						{/* Agregar al carrito */}
						<Button color="secondary" className="circular-btn">
							Agregar al carrito
						</Button>

						{/* <Chip label="No hay disponibles" color="error" variant='outlined' /> */}

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

//* You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from "next";
import { useProducts } from "../../hooks";
import { getProductBySlug, getProducts } from "../../database";

export const getStaticPaths: GetStaticPaths = async (ctx) => {
	let products = await getProducts();

	return {
		paths: products.map((product) => ({ params: { slug: product.slug } })),
		fallback: "blocking",
	};
};

//^ You should use getStaticProps when:
//^- The data required to render the page is available at build time ahead of a user’s request.
//^- The data comes from a headless CMS.
//^- The data can be publicly cached (not user-specific).
//^- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string };
  
  const product = await getProductBySlug(slug)
  
  if( !product ) {
    return {
      redirect :{
        destination: '/',
        permanent: false
      }
    }
  }

	return {
		props: {
      product
    },
	};
};

//& You should use getServerSideProps when:
//& - Only if you need to pre-render a page whose data must be fetched at request time
// import { GetServerSideProps } from 'next'

// import { getProductBySlug } from '../../database';

// export const getServerSideProps: GetServerSideProps = async ({params}) => {

//   const {slug} = params as { slug: string };

//   const product = await getProductBySlug(slug);
//   return {
//     props: {
//       product
//     }
//   }
// }
