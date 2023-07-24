import { FC } from 'react'
import { Grid } from '@mui/material'
import { IProduct } from '../../interfaces'
import { ProductCard } from '.'

interface Props {
    products: IProduct[];
    page?: string;
}

export const ProductList: FC<Props> = ({ products, page = 'products' }) => {

  return (
    <Grid container spacing={4}>
        {
            products.map( product => (
                <ProductCard 
                    key={ product.slug }
                    product={ product }
                    page={ page }
                />
            ))
        }
    </Grid>
  )
}
