import { Component, useState } from 'react'
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Data from "./Data.json"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'


const App = () => {

   
  
  

  return (
    <BrowserRouter>
      <NavBar />

      <ItemListContainer  />

    </BrowserRouter>


  )
}

export default App


