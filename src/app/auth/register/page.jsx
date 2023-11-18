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
import { useMutation, useQuery } from '@tanstack/react-query';
// Custom components
import { HSeparator } from 'components/separator/Separator';
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Link from 'next/link';
import { useEffect } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';



const sendRegData = (formData)=>{
  return ()=>{
    fetch("http://localhost:4000/api/v1/register",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify(formData),

    })
  }
}

export default function SignIn() {
  const [GitData, setGitData] = useState({});
  const [gituser, setGitUser] = useState('');
  const [formData, setformData] = useState({
    username: '',
    email: '',
    Degree: '',
    Branch: '',
    College: '',
    DiscordId: '',
  });

  useEffect(() => {
    const querystring = window.location.search;
    const urlParam = new URLSearchParams(querystring);
    const TokenParam = urlParam.get('token');

    localStorage.setItem('token', TokenParam);
  }, []);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const storedGithubData = localStorage.getItem('GithubData');
      const token = localStorage.getItem('token');
      if (storedGithubData) {
        return JSON.parse(storedGithubData);
      }

      // If GithubData is not in local storage, fetch it from the server
      const response = await fetch(
        'http://localhost:4000/api/v1/participant/userInfo',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error('Failed to fetch user info');
      }

      const newData = await response.json();

      localStorage.setItem('GithubData', JSON.stringify(newData));

      return newData;
      // console.log('GitData', newData);
    },
  });

  useEffect(() => {
    const GitDatalocal = localStorage.getItem('GithubData');
    const ParseData = JSON.parse(GitDatalocal);
    setGitData(ParseData.data);
    setGitUser(ParseData.data.githubUsername);

    // rest of your useEffect code
  }, []); // empty dependency array means it runs once after the initial render

  // console.log(GitData);

  const textColor = useColorModeValue('navy.700', 'white');
  const textColorSecondary = 'gray.400';
  const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
  const textColorBrand = useColorModeValue('brand.500', 'white');
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' },
  );
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

    // If the input field is not related to the username, update the state normally
    if (name !== 'username') {
      setformData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const registerMutation = useMutation(sendRegData(formData),{
    onSuccess:()=>{
      console.log("Success")
    },
    onError:()=>{
      console.log("Error");
    }
  })

  const handleSubmit = (e) => {
    console.log(formData);
    setformData((prevData) => ({
      ...prevData,
      username: gituser,
    }));

    registerMutation.mutate();
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
                  Username<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired={true}
                  variant="auth"
                  fontSize="sm"
                  ms={{ base: '0px', md: '0px' }}
                  type="text"
                  placeholder="username"
                  name="username"
                  value={`${GitData.githubUsername}`}
                  onChange={handleChange}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
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
                  name="Degree"
                  fontSize="sm"
                  onChange={handleChange}
                  ms={{ base: '0px', md: '0px' }}
                  mb="24px"
                  fontWeight="500"
                  size="lg"
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
                  name="Branch"
                  placeholder="Electronic and Communication"
                  mb="24px"
                  onChange={handleChange}
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
                  name="College"
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
                  name="College"
                  onChange={handleChange}
                  placeholder="Indian Institute of Information Techonlogy, Allahabad"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
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
                  name="DiscordId"
                  onChange={handleChange}
                  placeholder="akshayw1"
                  mb="24px"
                  fontWeight="500"
                  size="lg"
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
