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
} from "@chakra-ui/react";
import { ChakraProvider } from '@chakra-ui/react';
import { useParams } from "react-router-dom";
const ItemDetail = ({products}) => {
  const { id } = useParams();
  const prodFilter = products.filter((prod) => prod.id == id);
  return (
    <ChakraProvider>
    <div>
      {products.map((prod)=>(
        <div key={prod.id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={prod.image} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{prod.name}</Heading>
                <Text color="blue.800" fontSize="l">
                  Description: {prod.description}
                </Text>
                <Text color="blue.800" fontSize="l">
                  Category: {prod.category}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {prod.stock}
                </Text>
                <Text color="green.600" fontSize="xl">
                  Price: {prod.precio}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            
          </Card>
        </Center>
      </div>
      ))}
    </div>
    </ChakraProvider>
  )
}

export default ItemDetail