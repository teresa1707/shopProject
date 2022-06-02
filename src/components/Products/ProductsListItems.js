import React from 'react'
import { Card, CardActions, CardContent, Button } from '@mui/material'

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
            <CardActions>
                <Button>Add to cart</Button>
            </CardActions>
        </Card>
    )
}
