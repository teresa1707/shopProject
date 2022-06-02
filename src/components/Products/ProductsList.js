import React from 'react'
import { Typography } from '@mui/material'
import { ProductsListItems } from './ProductsListItems'

export const ProductsList = () => {
    return (
        <>
            <Typography
                variant="h4"
                align="center"
                style={{
                    marginTop: 40,
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            <ProductsListItems />
            <ProductsListItems />
            <ProductsListItems />
        </>
    )
}
