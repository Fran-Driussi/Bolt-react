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
  Spinner,
  CircularProgress
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';


const ItemDetail = ({ products }) => {
  console.log(products);

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
          
            <div key={id}>

              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                className='main-card'
              >
                <Image
                  className='image-prod'

                  src={Imagen}

                />

                <Stack>
                  <CardBody>
                    <Heading size='md'>{Nombre}</Heading>

                    <Text py='2'>
                      {Descpricion}
                    </Text>
                    <Text color="blue.400" fontSize="xl">
                      Category: {Categoria}
                    </Text>
                    <Text color="orange.300" fontSize="xl">
                      Stock: {Stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: ${Precio}
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <ItemCount id={id}
                      name={Nombre}
                      price={Precio}
                      stock={Stock} />




                  </CardFooter>
                </Stack>
              </Card>
            </div>
          
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