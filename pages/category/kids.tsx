import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { Typography } from '@mui/material'
import { HomeSkeleton } from '../../components/ui'
import { ProductList } from '../../components/products'
import { useProducts } from '../../hooks'

const KidsPage = () => {
   
	const {products, isLoading } =  useProducts('/products?gender=kid')

  return (
	<ShopLayout title={"Teslo-Shop - Kids"} pageDescription={"Encuentra los mejores productos de Teslo para ninos"}>
			<Typography variant="h1" component="h1">
				Ninos
			</Typography>
			<Typography variant="h2" sx={{ mb: 1 }}>
				Todos los productos
			</Typography>
			{isLoading ? <HomeSkeleton /> : <ProductList products={products} page='../../products' />}
		</ShopLayout>
  )
}

export default KidsPage