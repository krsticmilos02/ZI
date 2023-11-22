import React, { useState } from 'react'
import { FormLabel, FormControl, VStack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Login = () => {
  const [show, setShow] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);  

  const submitHandler = () => {};

  return (
    <VStack spacing='5px' color={'black'}>     
        <FormControl id='email' isRequired>
            <FormLabel>
                Email
            </FormLabel>
            <Input 
                placeholder='Enter your email'
                onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id='password' isRequired>
            <FormLabel>
                Password
            </FormLabel>
            <InputGroup>
                <Input 
                    type={show ? "text" : "password" }
                    placeholder='Enter your password'
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <InputRightElement width={"4.5rem"}>
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}      
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        

        <Button
            colorScheme='blue'
            width={"100%"}
            style={{marginTop:15}}
            onClick={submitHandler}
        >
            Login
        </Button>
        <Button
            variant={"solid"}
            colorScheme='red'
            width={"100%"}
            style={{marginTop:15}}
            onClick={()=>{
                setEmail("guest@example.com");
                setPassword("123456");
            }}
        >
            Get Guest user credentials
        </Button>
    </VStack>
  );
}

export default Login