import React, { useState } from 'react'
import {
    Card,
    CardActions,
    CardContent,
    Button,
    TextField,
} from '@mui/material'
import './ProductsListItems.scss'
// import PropTypes from 'prop-types'

export const ProductsListItems = ({
    totalCartItems,

    image = 'images/no-image.jpg',
    name,
    description = 'No desc...',
    type,
    capacity,
    price,
}) => {
    const [count, setCount] = useState(1)
    const [color, setColor] = useState('green')

    const onIncrementClick = () => setCount(count + 1)
    const onDecrementClick = () => setCount(count - 1)

    const changeColor = () => {
        setColor((prevState) => (prevState === 'green' ? 'red' : 'green'))
    }

    return (
        <Card>
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <h2>{name}</h2>

                <p>{description}</p>
                <p>
                    Color :<span className={color}>{color}</span>{' '}
                </p>
                <Button variant="outlined" onClick={changeColor}>
                    change color
                </Button>
                <div className="product-features">
                    <span>Type : </span>
                    {type}
                </div>
                <div className="product-features">
                    <span>Capacity : </span>
                    {capacity}Gb
                </div>
                <div className="product-price">{price} $</div>
                <div className="product-quantity">
                    <Button
                        variant="contained"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />

                    <Button
                        id="button"
                        variant="contained"
                        onClick={onIncrementClick}
                        disabled={count >= 10}
                    >
                        +
                    </Button>
                </div>
            </CardContent>

            <CardActions className="add-to-cart-block">
                <Button
                    variant="contained"
                    onClick={() => totalCartItems(count, price)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

// ProductsListItems.propTypes = {
//     image: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     description: PropTypes.string,
//     type: PropTypes.string.isRequired,
//     capacity: PropTypes.number.isRequired,
//     price: PropTypes.number,
// }

// ProductsListItems.defaultProps = {
//     description: 'No desc...',
//     image: 'images/no-image.jpg',
// }
