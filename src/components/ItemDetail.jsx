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
  Divider,
  Button,
  Box
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import ItemCount from './ItemCount';
const ItemDetail = ({ products }) => {
  const { id } = useParams();
  const prodFilter = products.filter((prod) => prod.id == id);


  return (
    <ChakraProvider>
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
                  <Text color="blue" fontSize="xl">
                    Category: {prod.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {prod.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Price: {prod.precio}
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
    </ChakraProvider>
  )
}

export default ItemDetail