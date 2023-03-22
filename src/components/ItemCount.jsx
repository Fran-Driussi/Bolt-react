import React, { useContext } from 'react';
import {
  Text,
  Button,
  Box,
  Tooltip,
  IconButton
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';


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
          {count >= 1?(
            <Button onClick={restar}>-</Button>
          ): (
            <Tooltip placement= "bottom" label="Disabled" >
              <IconButton icon={<MinusIcon/>} isDisabled/>
            </Tooltip>
          ) }
          
          <Text>{count}</Text>
          {count<stock?(
            <Button onClick={sumar}>+</Button>
          ):(
            <Tooltip placement= "bottom" label="Maximo stock alcanzado">
              <IconButton icon={<AddIcon/>} isDisabled/>
            </Tooltip>
          )}
          
          {count > 0 ?(
            <Button variant='solid' bg="teal.100" onClick={onAdd}>
            <Link to={"/cart"}> Agregar al carrito: {count} </Link></Button>
          ):(
            <Tooltip placement= "bottom" label="Ningun Producto seleccionado">
              <IconButton icon={<AddIcon/>} isDisabled/>
            </Tooltip>
          )}
          
        </Box>
      </ChakraProvider>
       

    </div>
  )
}

export default ItemCount