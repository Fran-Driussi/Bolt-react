import React from 'react'
import Data from  "../Data.json"
import Item from './Item'
import { Container } from "@chakra-ui/react"

const ItemList = ({products}) => {
  return (
    
    <div>
      {products.map(prod =>(
             <Item
             key={prod.id}
             id={prod.id}
             name={prod.name}
             price={prod.precio}
             stock={prod.stock}
             image={prod.image}

           />
     
         ))}
      </div>
    
  )
  
}

export default ItemList