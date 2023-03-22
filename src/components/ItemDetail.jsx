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
  const { id } = useParams();
  const prodFilter = products.filter((prod) => prod.id == id);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000)
  }, [])


  return (
    <ChakraProvider>
      {loading ? (
        <div>
          {products.map((prod) => (
            <div key={prod.id}>

              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                className='main-card'
              >
                <Image
                  className='image-prod'

                  src={prod.image}

                />

                <Stack>
                  <CardBody>
                    <Heading size='md'>{prod.name}</Heading>

                    <Text py='2'>
                      {prod.description}
                    </Text>
                    <Text color="blue.400" fontSize="xl">
                      Category: {prod.category}
                    </Text>
                    <Text color="orange.300" fontSize="xl">
                      Stock: {prod.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: ${prod.precio}
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <ItemCount id={prod.id}
                      name={prod.name}
                      price={prod.precio}
                      stock={prod.stock} />




                  </CardFooter>
                </Stack>
              </Card>
            </div>
          ))}
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