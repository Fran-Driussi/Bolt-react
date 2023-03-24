import React from 'react'
import {
    Input, FormControl,
    FormLabel,
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
        <>
          <form className="form">
  <header>
    Credit card information
  <span className="message">Fill the form to continue.</span>
  </header>
  <label>
    <span>Card Number</span>
    <input placeholder="Type your card number" className="input" type="number" required=""/>
  </label>
  <label>
    <span>Name on card</span>
    <input placeholder="Type your name as appear on card" className="input" type="text" required=""/>
  </label>
  <fieldset>
    <label className="sm">
    <span>Exp. Month</span>
    <div className="custom-select">
    <select className="input" type="select" required="">
      <option></option>
      <option>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>Dicember</option>
    </select>
    </div>
  </label>
  <label className="sm">
    <span>Exp. Year </span>
    <div className="custom-select">
    <select className="input" type="select" required="">
      <option></option>
      <option>2023</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>

    </select>
    </div>
  </label>
    <label className="sm">
    <span>CW </span>   
    <input className="input" placeholder="1234" size="4" maxlength="4" type="text" required=""/>
  </label>
  </fieldset>
  <div className="submitCard">
    <button>Complete payment</button>
  </div>
</form>

        </>
    )
}

export default Contact