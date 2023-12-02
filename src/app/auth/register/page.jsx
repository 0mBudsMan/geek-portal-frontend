'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Container,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Select,
} from '@chakra-ui/react';
import {FetchedData,sendRegData} from '../../api/profile/profile'
import { useMutation, useQuery } from '@tanstack/react-query';
import { useToast } from '@chakra-ui/react'
// Custom components
import { HSeparator } from 'components/separator/Separator';
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Link from 'next/link';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';
import axios from 'axios';




export default function SignIn() {
  const [GitData, setGitData] = useState({});
  const [gituser, setGitUser] = useState('');
  const [formData, setformData] = useState({
    name: gituser,
    email: '',
    degree: '',
    branch: '',
    college: '',
    discordId: '',
    githubId:'',
    graduationYear: '',

  });

  const toast = useToast()

  useEffect(() => {
    const querystring = window.location.search;
    const urlParam = new URLSearchParams(querystring);
    const TokenParam = urlParam.get('token');

    localStorage.setItem('token', TokenParam);
  }, []);

  const { data } = useQuery({
    queryKey: ['userInfo'],
    queryFn:FetchedData,
  
  });
    useEffect(() => {
      const GitDatalocal = localStorage.getItem('GithubData');
      const ParseData = JSON.parse(GitDatalocal);
    
      setGitData(ParseData.data);
    
    }, []);




  

  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
 
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' },
  );
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    const querystring = window.location.search;
    const urlParam = new URLSearchParams(querystring);
    const TokenParam = urlParam.get('token');

    localStorage.setItem('token', TokenParam);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
  };
  
  async function sendRegData(formData){
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      console.log("Hiii")
      const response = await axios.post(
        'http://localhost:4000/api/v1/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      
      console.log(response.data);
    } catch (error) {
    
      console.error('Error sending registration data:', error.message);
    }
  };


  const registerMutation = useMutation({
    mutationFn:sendRegData,
    onSuccess:()=>{
      console.log("Success")
    },
    onError:()=>{
      console.log("Error");
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate(formData);

    for (const key in formData) {
      if (formData.hasOwnProperty(key) && formData[key].trim() === '') {
        // If any field is blank, handle the error (e.g., show an alert or console log)
        console.error(`Error: ${key} is blank`);
        toast({
          title: `${key} is Required `,
          description: `Please enter the ${key}`,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        return; 
      }
    }

  
   
  

    console.log(formData);
  };

 



  return (

    <DefaultAuthLayout>
      <Container maxW="full" centerContent>
        <Flex
          maxW={{ base: '100%', md: 'max-content' }}
          w="100%"
          mx={{ base: 'auto', lg: '0px' }}
          me="auto"
          h="100%"
          alignItems="start"
          justifyContent="center"
          mb={{ base: '30px', md: '60px' }}
          px={{ base: '25px', md: '0px' }}
          mt={{ base: '40px', md: '14vh' }}
          flexDirection="column"
        >
          <Box me="auto">
            <Heading color={textColor} fontSize="36px" mb="10px">
              Register
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColorSecondary}
              fontWeight="400"
              fontSize="md"
            >
              Register for GeekPortal with Below Details...
            </Text>
          </Box>
          <Flex
            zIndex="2"
            direction="column"
            w={{ base: '100%', md: '900px' }}
            maxW="100%"
            background="transparent"
            borderRadius="15px"
            mx={{ base: 'auto', lg: 'unset' }}
            me="auto"
            mb={{ base: '20px', md: 'auto' }}
          >
            <Flex justifyContent="space-between" align="center" gap={6}>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Name<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '0px' }}
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={handleChange}

                  
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Email<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '0px' }}
                  type="email"
                  placeholder="iec2022117@iiita.ac.in"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  required
                />
              </FormControl>
            </Flex>
            <Flex justifyContent="space-between" align="center" gap={6}>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Degree<Text color={brandStars}>*</Text>
                </FormLabel>

                <Select
                  placeholder="Select option"
                  isRequired={true}
                  variant="auth"
                  name="degree"
                  fontSize="sm"
                  onChange={handleChange}
                  ms={{ base: '0px', md: '0px' }}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  required
                >
                  <option value="BTECH">BTECH</option>
                  <option value="MTECH">MTECH</option>
                  <option value="PHD">PHD</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Enter Your Branch<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '0px' }}
                  type="text"
                  name="branch"
                  placeholder="Electronic and Communication"
                  mb="24px"
                  onChange={handleChange}
                  fontWeight="500"
                  size="lg"
                  required
                />
              </FormControl>
            </Flex>

            <Flex justifyContent="space-between" align="center" gap={6}>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  name="college"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                  
                >
                  Enter College<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '0px' }}
                  type="text"
                  name="college"
                  onChange={handleChange}
                  placeholder="Indian Institute of Information Techonlogy, Allahabad"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Enter Discord ID<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '0px' }}
                  type="text"
                  name="discordId"
                  onChange={handleChange}
                  placeholder="akshayw1"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                />
              </FormControl>
            </Flex>
            <Flex justifyContent="space-between" align="center" gap={6}>
              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  name="college"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Enter Graduation Year<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '0px' }}
                  type="number"
                  name="graduationYear"
                  onChange={handleChange}
                  placeholder="2026"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  required
                />
              </FormControl>

              <FormControl>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Enter Github ID<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '0px' }}
                  type="text"
                  name="githubId"
                  onChange={handleChange}
                  placeholder="akshayw1"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
                  required
                />
              </FormControl>
            </Flex>

            {/* <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="center">
                <Checkbox
                  id="remember-login"
                  colorScheme="brandScheme"
                  me="10px"
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  Keep me logged in
                </FormLabel>
              </FormControl>
              <Link href="/auth/forgot-password">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Forgot password?
                </Text>
              </Link>
            </Flex> */}
            {/* <Link href="/admin/home"> */}
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={handleSubmit}
            >
              Register
            </Button>
            {/* </Link> */}
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="start"
              maxW="100%"
              mt="0px"
            >
              <Link href="/auth/sign-up">
                <Text color={textColorDetails} fontWeight="400" fontSize="14px">
                  Having a existing account?
                  <Text
                    color={textColorBrand}
                    as="span"
                    ms="5px"
                    fontWeight="500"
                  >
                    Login
                  </Text>
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </DefaultAuthLayout>
  );
}
