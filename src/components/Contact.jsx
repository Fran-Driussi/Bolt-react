import React from 'react'
import {
    Input, FormControl,
    FormLabel,
    FormHelperText,
    Button
 
} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import { useState } from 'react'

const Contact = () => {
    const[nombre,setNombre]= useState("");
    const[email,setEmail]= useState("");
    const [message,setMesagge]= useState("");
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("nombre:"+" "+ nombre)
        console.log("email:"+" "+ email);
        console.log("Message:"+" "+ message)


    }
    return (
        <div>
            <ChakraProvider>
                <form onSubmit={handleSubmit} >

                    <FormControl isRequired>
                        <FormLabel>First name</FormLabel>
                        <Input placeholder='First name'  onChange={(e)=> setNombre(e.target.value)}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Last name</FormLabel>
                        <Input placeholder='Last name'  />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' onChange={(e)=> setEmail(e.target.value)}/>
                    </FormControl>
                    <Input
                        color='teal'
                        placeholder='Message'
                        _placeholder={{ color: 'inherit' }}
                        onChange={(e)=> setMesagge(e.target.value)}
                    />

                    <Button className='button' colorScheme='teal' type='submit' >
                        Send
                    </Button>
                    



                </form>
            </ChakraProvider>
        </div>
    )
}

export default Contact