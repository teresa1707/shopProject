import React from 'react'
import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductsListItems.scss'

export const ProductsListItems = () => {
    return (
        <Card>
            <CardContent>
                <h4>IPhone XS</h4>
                <p>This is phone</p>
                <div>Type : phone</div>
                <div>Capacity : 64Gb</div>
                <div>500 $</div>
            </CardContent>
            <CardActions class="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
