import React from 'react'

import './CartHeader.scss'

export const CartHeader = () => {
    const isLoaded = true
    return (
        <div className={isLoaded ? 'green' : 'red'}>
            <div>0</div>
            <div>0$</div>
        </div>
    )
}
