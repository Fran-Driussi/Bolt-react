import { Component, useState } from 'react'
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Data from "./data.json"


const App = () => {

  return (
    <>
    
    <NavBar />
    <ItemListContainer greeting ={Data}/>
   
    </>
  )
}

export default App


