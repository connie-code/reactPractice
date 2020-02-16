import React from 'react'

// functional component
// function Greet(){
//   return <h1> Hello Person </h1>
// }

// ES6 syntax
const Greet = () => <h1> Hello Person</h1>

// name export
// const Greet = () => <h1> Hello Person</h1>
// >>> here you have to import the component w/ the exact same name
// like: import { Greet } from './components/greet', where the tag is <Greet></Greet>
// not: import MyComponent from './components/greet', where the tag is <MyComponent></MyComponent>


// need to connect to the rest of app (render to the browser)
export default Greet
