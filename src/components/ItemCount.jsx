import React, { useContext } from 'react';
import {
  Text,
  Button,
  Box,
  Alert,
  AlertIcon
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import Cart from './Cart';

const ItemCount = ({ id, name, price, stock }) => {
  const { cart, setCart } = useContext(CartContext);
  const [count, setCount] = useState(0);


  const sumar = () => {
    if (count >= stock) {
      
      
    }
    else {
      setCount(count + 1);
    }
  }

  const restar = () => {
    if (count < 1) {

    }
    else {

      setCount(count - 1);

    }
  }

  const onAdd = () => {
    setCart((items) => {
      const foundItem = items.find((item) => item.id === id);
      if (foundItem) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + count };
          }
          else {
            return item;
          }
        })
      } else {
        return [...items, { id, cantidad: count, price, name }]
      }
    })
  }


  return (
    <div>
      <ChakraProvider>
        <Box className='count'>
          <Button onClick={restar}>-</Button>
          <Text>{count}</Text>
          <Button onClick={sumar}>+</Button>
          <Button variant='solid' colorScheme='blue' onClick={onAdd}>
            <Link to={"/cart"}> Agregar al carrito: {count} </Link></Button>
        </Box>
      </ChakraProvider>
       

    </div>
  )
}

export default ItemCount