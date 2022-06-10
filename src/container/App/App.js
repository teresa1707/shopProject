import React, { useState } from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'
import productsArray from 'utils/productsArray'

export const App = () => {
    const [cartData, setCartData] = useState({ count: 0, price: 0 })

    // const [count, setCount] = useState(1)
    // const [color, setColor] = useState('green')

    // const onIncrementClick = () => setCount(count + 1)
    // const onDecrementClick = () => setCount(count - 1)

    // const changeColor = () => {
    //     setColor((prevState) => (prevState === 'green' ? 'red' : 'green'))
    // }

    return (
        <>
            {' '}
            <CssBaseline />
            <Header cartData={cartData} />
            <Main cartData={cartData} />
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
