import React, { useState } from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [cartData, setCartData] = useState({ count: 1, price: 0 })

    function totalCartItems(count, price) {
        setCartData((prevState) => ({
            count: prevState.count + count,
            price: prevState.price + price * count,
        }))
    }

    return (
        <>
            {' '}
            <CssBaseline />
            <Header cartData={cartData} />
            <Main totalCartItems={totalCartItems} />
            <Footer />
        </>
    )
}

// // default export :
// ________________________
// // const App = () => {
//   return (
//     <>
//     <h1>App.js</h1>
//     </>
//   )
// }

// export default App
