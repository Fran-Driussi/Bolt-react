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

  const { cart, removeItem,nullCart, totalCart,setCart } = useContext(CartContext);
  const { id } = useParams();
  const cartFilter = cart.filter((prod) => prod.id == id);

  return (
    <>
      <ChakraProvider>

        <div>
          {cart <= 0 ? (
            <div className='cartNull'>
              <span >El carrito esta vacio</span>
              <Menu >
                <Link to={"/catalogue"}>
                  <button
                    as={Button}
                    borderRadius='lg'
                    className='btn'
                  >
                    Lista de productos
                  </button>
                </Link>
              </Menu>
            </div>

          ) : (
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
                        <Button variant='solid' colorScheme='red' onClick={() => removeItem(prod.id)}  >Eliminar producto</Button>
                      </Box>
                    </CardFooter>
                  </Stack>
                </Card>
              </div>
            ))
          )}

        </div>
        {cart != 0 ? (
          <Box className='count'>

            <Link to={"/contact"}><Button variant='solid' colorScheme='blue' onClick={() => nullCart()}>Finalizar compra:  ${totalCart()} </Button></Link>

            <Button variant='solid' colorScheme='red' onClick={() => nullCart()} >Vaciar carrito</Button>
          </Box>
        ) : (
          <p></p>
        )}

      </ChakraProvider>
    </>

  )

}


export default Cart