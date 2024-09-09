import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// creating element using react elements
// in custom react folder we have made a custom react where we have given props regarding to our liking but in react we cannot give methods and its properties to our liking, here react give an object with pre-defined syntax and we cannot control it  


// so here we see how to create a react element in which first parameter is expected a html tag, second param is object and third is direct text

const reactElement = React.createElement(
    'a',
    {href: "http://google.com", target: "_blank"},
    'click me to visit google !'
)


createRoot(document.getElementById('root')).render(

    // <App />
    reactElement
    
)
