import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './container/App/App'
//import App from './container/App/App' //default export /look App.js//

//__create components :

// // const h1 = <h1>Hello world</h1>
// // const el = (<div>
// //   <div>
// //     <ul>
// //       <li>list1
// //       </li>
// //       <li>list2
// //       </li>
// //       <li>list3
// //       </li>
// //     </ul>
// //   </div>
// //   <p>lorem
// //   </p>
// // </div>)

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(h1);

//______create a component:______you have to envelope elements with <div> to create many elements 1 component//

// function App() {
// return (<div>
//   <h1>Hello App.js</h1>;
//   <ul>
//     <li>list1
//       </li>
//        <li>list2
//        </li>
//        <li>list3
//        </li>
//      </ul>
//   </div>)
// }
// const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(<App />);

//  function App() {
//   return (<React.Fragment>  // :to create many elements : instead of <div> put <React. ...>
//     <h1>Hello App.js</h1>
//     <ul>
//       <li>list1
//         </li>
//          <li>list2
//          </li>
//          <li>list3
//          </li>
//        </ul>
//        </React.Fragment>)
//        ;
//   }
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//    root.render(<App />);

// //  function App() {
// //   return (<>        // :to create many elements : instead of <div> or <React. ...> put <> !!!!!//
// //     <h1>Hello App.js</h1>
// //     <ul>
// //       <li>list1
// //         </li>
// //          <li>list2
// //          </li>
// //          <li>list3
// //          </li>
// //        </ul>
// //        </>)
// //        ;
// //   }
// //   const root = ReactDOM.createRoot(document.getElementById("root"));
// //    root.render(<App />);

//    function App() {
//     return (<>
//       <header>Hello AppList</header>
//       <ul>
//         <li>list1
//           </li>
//            <li>list2
// //            </li>
// //            <li>list3
// //            </li>
// //          </ul>
// //          </>)
// //          ;
// //     }
// //     const root = ReactDOM.createRoot(document.getElementById("root"));
// //      root.render(<App />);

// const Header = () => <h1>Hello App.js</h1>
// function AppList() {
//     return (
//         <ul>
//             <li>list1</li>
//             <li>list2</li>
//             <li>list3</li>
//         </ul>
//     )
// }

// function App() {
//     return (
//         <>
//             <Header />
//             <AppList />
//         </>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
