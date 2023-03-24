import React from 'react'
import Data from "../Data.json"
import { ChakraProvider } from '@chakra-ui/react'
import {
  Center,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
  ButtonGroup

} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, stock, image, category }) => {
  return (
    <>
<ChakraProvider>
      <div key={id} className='card'>
      <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text color="orange.300">
        Stock: {stock}
      </Text>
      <Text color="blue.400">
        Category: {category}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <button  className='button' >
      <Link to={`/item/${id}`}>Details</Link>
      </button>
     
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
</ChakraProvider>


    </>
  )
}

export default Item