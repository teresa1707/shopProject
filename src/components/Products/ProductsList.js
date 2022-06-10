import React from 'react'
import { Typography } from '@mui/material'
import { ProductsListItems } from './ProductsListItems'
import { Grid } from '@mui/material'
import productsArray from 'utils/productsArray'

export const ProductsList = ({ cartData }) => {
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

            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItems
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                cartData={cartData}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
