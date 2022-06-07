import React from 'react'
import { Card, CardActions, CardContent, Button } from '@mui/material'
import './ProductsListItems.scss'
import PropTypes from 'prop-types'

export const ProductsListItems = ({
    image = 'images/no-image.jpg',
    name,
    description = 'No desc...',
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

ProductsListItems.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number,
}

// ProductsListItems.defaultProps = {
//     description: 'No desc...',
//     image: 'images/no-image.jpg',
// }
