import React from 'react'
import Data from  "../data.json"
import ItemList from './ItemList'

const ItemListContainer = (Data) => {
  const productos = new Promise((resolve, reject) => {
    if(Data){
      setTimeout(()=>{
        resolve(Data);
      }, 3000 );
      
    }
    else{
      reject("No hay productos")
    }
  })

  productos .then((productos)=>{
    console.log(productos);
  })
  .catch((error)=>{
    console.log(error);
  })

  return (
    <>
    <ItemList/>
  
  </>
  )
}
export default ItemListContainer