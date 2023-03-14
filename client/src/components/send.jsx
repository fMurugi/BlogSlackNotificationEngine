import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState } from 'react';
  
  export default function SimpleCard() {
    const [message,setMessage,] = useState({
      body:"",
    });


    // let message ="";
    function handleClick(){
      fetch("http://localhost:8084/messages",{
        method:'POST',
        mode:'cors',
        body:JSON.stringify(messagae)
      })
    }
    return (
      <form>
        <label>
          Message:
          <textarea value={} onChange={this.handleChange}
        </label>
      </form>
    );
  }
  