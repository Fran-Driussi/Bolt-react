import React from 'react'
import Data from "../Data.json"
import Item from './Item'
import { Container } from "@chakra-ui/react"

const ItemList = ({ products }) => {
  return (

    <div>
      <Container className='main-catalogue'>
        {products.map(prod => (
          <Item
            key={prod.Nombre}
            id={prod.id}
            nombre={prod.Nombre}
            precio={prod.Precio}
            stock={prod.Stock}
            imagen={prod.Imagen}
            categoria={prod.Categoria}

          />

        ))}
      </Container>
    </div>

  )

}

export default ItemList