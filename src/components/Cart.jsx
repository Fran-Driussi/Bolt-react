import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';

const Cart = () => {

  const {cart, setCart} = useContext(CartContext);
  console.log(cart);
  const { id } = useParams();
  const cartFilter = cart.filter((prod) => prod.id == id);
  
  return (
  <>
  <ChakraProvider>
  {cart.map((prod) => (
          <div key={prod.id}>

            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
              className='main-card'
            >
          
              <Stack>
                <CardBody>
                  <Heading size='md'>{prod.name}</Heading>

                  <Text color="red.600" fontSize="xl">
                    Cantidad: {prod.cantidad}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Price: {prod.price}
                  </Text>
                </CardBody>

                
              </Stack>
            </Card>
          </div>
        ))}
      
</ChakraProvider>
  </>
  )
  }

export default Cart