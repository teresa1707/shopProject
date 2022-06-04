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
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="product-features">
                    <span>Type : </span>
                    {type}
                </div>
                <div className="product-features">
                    <span>Capacity : </span>
                    {capacity}Gb
                </div>
                <div className="product-price">{price} $</div>
            </CardContent>
            <CardActions className="add-to-cart-block">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
