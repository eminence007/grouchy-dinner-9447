import React, { useState } from "react";
import axios from "axios";
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



const SignUp = () => {
  const [user,setUser]=useState({
    
    email:"",
    password:"",
    sex:"",
    dob:"",
    height:0,
    weight:0
  })
  function changeHandle(e){
    setUser((pre)=>{
      return {...pre,[e.target.name]:e.target.value}
    })
  }
  function submitHandler(){
    console.log(user)
    axios.post("http://loaclhost:8080/user/register",user)

  }
  return <div>
    <div>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Create Your Free Account</Heading>
          
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" onChange={changeHandle} placeholder="Enter Email"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password"  name="password" onChange={changeHandle} placeholder="Enter Password"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password"  name="password" onChange={changeHandle} placeholder="Enter Password" />
            </FormControl>
           
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              
              </Stack>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>





      {/* <label>Email</label> */}
      {/* <input name="email" onChange={changeHandle} placeholder="Enter Email"/><br/> */}
      {/* <label>Password</label> */}
      {/* <input name="password" onChange={changeHandle} placeholder="Enter Password"/><br/> */}
      {/* <label>Confirm Password</label> */}
      {/* <input  placeholder="Confirm Password"/><br/> */}
    </div>


    <div>


    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            
            
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                  

                  <Heading fontSize={'1xl'}>Sex</Heading>
                <Checkbox  name="sex" onChange={()=>{setUser((pre)=>{return {...pre,sex:"male"}})}} type="radio" >Male</Checkbox>
                <Checkbox  name="sex" onChange={()=>{setUser((pre)=>{return {...pre,sex:"female"}})}} type="radio" >Female</Checkbox>
        
               
               
              </Stack>
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>




      <label>Sex</label>
      <input name="sex" onChange={()=>{setUser((pre)=>{return {...pre,sex:"male"}})}} type="radio"/>
      <input name="sex" onChange={()=>{setUser((pre)=>{return {...pre,sex:"female"}})}} type="radio"/><br/>
      <label>Birthday</label>
      <input name="dob" onChange={changeHandle} type="date" />
      <label>Height</label>
      <input name="height" onChange={changeHandle} placeholder="enter height " />
      <label>Weight</label>
      <input name="weight" onChange={changeHandle} placeholder="weight"/>
      <select>
        <option>Kilogram</option  >
        <option>Pound</option>
      </select>
    </div>
    <button onClick={submitHandler} >Submit</button>
  </div>;
};

export default SignUp;
