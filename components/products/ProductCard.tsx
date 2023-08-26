import { FC, useMemo, useState } from "react";
import NextLink from "next/link";
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link, Skeleton, Chip } from "@mui/material";

import { IProduct } from "../../interfaces";

interface Props {
	product: IProduct;
    page?: string
}

export const ProductCard: FC<Props> = ({ product, page = 'products' }) => {
	
	const [isHovered, setIsHovered] = useState(false);
	const [imgLoad, setImgLoad] = useState(false);

	const productImage = useMemo(() => {
		return isHovered ? `${page}/${product.images[1]}` : `${page}/${product.images[0]}`;
	}, [isHovered, product.images, page]);
    console.log(productImage);
	
	return (
		<Grid item xs={6} sm={4} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<Card>
				<NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
					<Link>
						<CardActionArea>
							{
								product.inStock === 0 && 
								<Chip
								color="primary"
								sx={{position: 'absolute', zIndex: 99, top: '10px', left: '10px'}}
								label='Sin stock'
								/>
							}
							<CardMedia
								component="img"
								className="fadeIn"
								image={productImage}
								alt={product.title}
								onLoad={() => setImgLoad(true)}
							/>
						</CardActionArea>
					</Link>
				</NextLink>
			</Card>

			<Box sx={{ mt: 1, display: imgLoad ? "block" : "none" }} className="fadeIn">
				<>
					<Typography fontWeight={700}>{product.title}</Typography>
					<Typography fontWeight={500}>{`$${product.price}`}</Typography>
				</>
			</Box>
		</Grid>
	);
};
