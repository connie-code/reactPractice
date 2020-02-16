import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet' // can omit the js extenstion


function App() {
  return (
    <div className="App">
    <Greet></Greet>

    </div>
  );
}

// Notes:
// To include grid component in app component: specify the component as a custom HTML tag:
// <Greet></Greet>
// if not content in btwn tags, can change to self-closing tag: <Greet />

export default App;
