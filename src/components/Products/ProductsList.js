import React from 'react'
import { Typography } from '@mui/material'
import { ProductsListItems } from './ProductsListItems'
import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'

//import comp from 'assets/comp.png'

export const ProductsList = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{
                    margin: '40px 0',
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            {/* <img src={image} alt="" /> */}
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {productsArray.map((product, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <ProductsListItems
                            // image={productimage}
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            capacity={product.capacity}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
