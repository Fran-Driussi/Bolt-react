import { Component, useState } from 'react'
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  


  return (
    <>
    
    <NavBar />
    <ItemListContainer greeting ={"Soy invisible"}/>
    </>
  )
}

export default App


