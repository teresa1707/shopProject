import React from 'react'
//import './CartHeader.css'
import styles from './CartHeader.module.css'

export const CartHeader = () => {
    return (
        //<div className="cartHeader">
        <div className={styles.cartHeader}>
            <div>0</div>
            <div>0$</div>
        </div>
    )
}
