import React from 'react'
import { Container } from '@mui/system'
import { ProductsList } from 'components/Products/ProductsList'

export const Main = ({ totalCartItems }) => (
    <>
        <Container>
            <ProductsList totalCartItems={totalCartItems} />
        </Container>
    </>
)
