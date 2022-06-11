import React, { useState } from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { CssBaseline } from '@mui/material'

export const App = () => {
    const [cartData, setCartData] = useState({ count: 10, price: 0 })
    const [count1, setCount] = useState(1)

    function totalCartItems() {
        return setCartData(count1 + cartData.count)
    }

    return (
        <>
            {' '}
            <CssBaseline />
            <Header cartData={cartData} />
            <Main
                count={count1}
                cartData={cartData}
                totalCartItems={totalCartItems}
            />
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
