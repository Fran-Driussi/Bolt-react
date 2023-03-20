
import CartWidget from './CartWidget'
import { Link } from "react-router-dom";
import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,

} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


const NavBar = () => {



  return (

    <>
      <ChakraProvider>
        <Container maxW="150rem" bg="gray.400" color="">
          <Flex alignItems="center" gap="2">
            <Link to={"/"}>
              <Avatar
                size="lg"
                src="https://cdn-icons-png.flaticon.com/512/5/5115.png"
              />
            </Link>
            <Box p="10" w="300px" h="100">
              <Heading size="md" >
                <Link to={"/"}>Bolt</Link>
              </Heading>
            </Box>

            <Box>
              <Menu>
                <Link to={"/catalogue"}>
                  <MenuButton
                    as={Button}
                    borderRadius='lg'
                    borderWidth='1.5px'
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'inline' }}
                    size="lg"
                    variant="outline"
                    colorScheme=""
                    m="5"
                  >
                    Catalogue
                  </MenuButton>
                </Link>
              </Menu>
              <Menu>
                <MenuButton
                  as={Button}
                  transition='all 0.2s'
                  borderRadius='lg'
                  borderWidth='1.5px'
                  _hover={{ bg: 'gray.400' }}
                  _expanded={{ bg: 'blue.400' }}
                  _focus={{ boxShadow: 'inline' }}
                  size="lg"
                  variant="outline"
                  colorScheme=""
                  rightIcon={<ChevronDownIcon />}
                  m="5"
                >
                  Categories
                </MenuButton>
                <MenuList className="menu-list">
                  <Link to={`/category/${"Nike"}`}>
                    <MenuItem>Nike</MenuItem>
                  </Link>
                  <Link to={`/category/${"Otro"}`}>
                    <MenuItem>Otro</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
              <Menu>
                <Link to={"/contact"}>
                  <MenuButton
                    as={Button}
                    borderRadius='lg'
                    borderWidth='1.5px'
                    _hover={{ bg: 'gray.400' }}
                    _expanded={{ bg: 'blue.400' }}
                    _focus={{ boxShadow: 'inline' }}
                    size="lg"
                    variant="outline"
                    colorScheme=""
                    m="5"
                  >
                    Contact
                  </MenuButton>
                </Link>
              </Menu>
            </Box>
            
              <Box p="6"  >  
                <Link to={"/cart"}>
                  <CartWidget />
                </Link>
              </Box>
            


          </Flex>
        </Container>

      </ChakraProvider>

    </>

  )
}

export default NavBar