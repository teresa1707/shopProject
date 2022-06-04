import React from 'react'
import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductsListItems.scss'

export const ProductsListItems = ({
    image,
    name,
    description,
    type,
    capacity,
    price,
}) => {
    return (
        <Card>
            <CardContent>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
                <h2>{name}</h2>
                <p>{description}</p>
                <div>Type : {type}</div>
                <div>Capacity : {capacity}Gb</div>
                <div className="product-price">{price} $</div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
