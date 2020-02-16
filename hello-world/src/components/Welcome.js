import React, {Component} from 'react' // {Component} = component class from React

// class component
class Welcome extends Component{
  render(){
    return <h1>Class Component</h1>
  }
}

// for a class to become a React component:
// 1. should extend the component class from React
// 2. class has to implement a render method which will return null or some HTML

// To connect this to the rest of the app:
export default Welcome
