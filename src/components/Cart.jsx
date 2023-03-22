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
  CardFooter,
  Button,
  Box,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const Cart = () => {

const { cart, setCart } = useContext(CartContext);
  const { id } = useParams();
  const cartFilter = cart.filter((prod) => prod.id == id);
  const clear = () => {
    
    cart.filter((prod) =>{
      prod.id !== id
    })
    
  };

 

  return (
    <>
      <ChakraProvider>
       
          <div>
            {cart <=0?(
              <div className='cartNull'>
              <span >El carrito esta vacio</span>
              <Menu >
                <Link to={"/catalogue"}>
                  <MenuButton
                    as={Button}
                    borderRadius='lg'
                  >
                    Lista de productos
                  </MenuButton>
                </Link>
              </Menu>
              </div>

            ):(
              cart.map((prod) => (
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
  
                        <Text color="orange.300" fontSize="xl">
                          Cantidad: {prod.cantidad}
                        </Text>
                        <Text color="green.600" fontSize="xl">
                          Price: ${prod.price}
                        </Text>
                        <Text fontSize="xl">
                          Total: ${prod.price * prod.cantidad}
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <Box className='count'>
                          <Button onClick={clear} variant='solid' colorScheme='red' >Eliminar producto</Button>
                        </Box>
                      </CardFooter>
  
  
                    </Stack>
                  </Card>
  
                </div>
              ))
            )}
            
          </div>
        {cart !=0?(
          <Box className='count'>
          
            <Link to={"/contact"}><Button variant='solid' colorScheme='blue'>Finalizar compra </Button></Link>
          
          <Button onClick={clear} variant='solid' colorScheme='red' >Vaciar carrito</Button>
        </Box>
        ):(
          <p></p>
        )}
        
      </ChakraProvider>
    </>
  )
}

export default Cart