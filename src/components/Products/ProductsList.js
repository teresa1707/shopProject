import React from 'react'
import { Typography } from '@mui/material'
import { ProductsListItems } from './ProductsListItems'
import { Grid } from '@mui/material'

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
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                gridItems="center"
            >
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItems
                        name="Iphone 11xs"
                        description="This is a Iphone 11xs"
                        type="phone"
                        capacity="64"
                        price="500"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItems
                        name="Iphone 13pro"
                        description="This is a Iphone 11xs"
                        type="phone"
                        capacity="126"
                        price="100"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductsListItems
                        name="Iphone 11xs"
                        description="This is a Iphone 11xs"
                        type="phone"
                        capacity="64"
                        price="500"
                    />
                </Grid>
            </Grid>
        </>
    )
}
