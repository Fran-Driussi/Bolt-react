import React from 'react'
import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  CircularProgress
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';

import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';


const ItemDetail = ({ products }) => {
  

const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000)
  }, [])


  return (
    <ChakraProvider>
      {loading ? (
        <div>
          
            

              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                className='main-card'
              >
                <Image
                  className='image-prod'

                  src={products.Imagen}

                />

                <Stack>
                  <CardBody>
                    <Heading size='md'>{products.Nombre}</Heading>

                    <Text py='2'>
                      {products.Descripcion}
                    </Text>
                    <Text color="blue.400" fontSize="xl">
                      Category: {products.Categoria}
                    </Text>
                    <Text color="orange.300" fontSize="xl">
                      Stock: {products.Stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: ${products.Precio}
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <ItemCount id={products.id}
                      name={products.Nombre}
                      price={products.Precio}
                      stock={products.Stock} />




                  </CardFooter>
                </Stack>
              </Card>
            </div>
          
        
      ) : (
        <div className='spinner' >
          <CircularProgress isIndeterminate size='100px' thickness='10px' color='gray.400' />
        </div>
        

      )}
    </ChakraProvider>
  )
}

export default ItemDetail