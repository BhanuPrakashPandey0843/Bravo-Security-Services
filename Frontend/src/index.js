import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route} from 'react-router-dom';
import Home from './components/Home.js';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css';
import App from './App.js';
import Contact from './components/Contact';
import About from './components/About'
import Layout from './Layout.js';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        
    </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
   </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
