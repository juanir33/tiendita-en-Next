import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { Typography } from '@mui/material'
import { HomeSkeleton } from '../../components/ui'
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'

const MenPage = () => {
  
	const {products, isLoading } =  useProducts('/products?gender=men')

	return (
	  <ShopLayout title={"Teslo-Shop - Home"} pageDescription={"Encuentra los mejores productos de Teslo aquí"}>
			  <Typography variant="h1" component="h1">
				  Tienda
			  </Typography>
			  <Typography variant="h2" sx={{ mb: 1 }}>
				  Todos los productos
			  </Typography>
			  {isLoading ? <HomeSkeleton /> : <ProductList products={products} page='../../products' />}
		  </ShopLayout>
	)
}

export default MenPage