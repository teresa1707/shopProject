import React from 'react'
import { Container } from '@mui/system'
import { ProductsList } from 'components/Products/ProductsList'
import { Button } from '@mui/material'

export const Main = ({
    cartData,
    totalCartItems,

    count1,
}) => {
    return (
        <>
            <Container>
                <ProductsList
                    count1={count1}
                    cartData={cartData}
                    totalCartItems={totalCartItems}
                />
            </Container>
        </>
    )
}
