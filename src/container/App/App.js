import React from 'react'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'

export const App = () => {
    return (
        <>
            <Header />
            <Main />
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