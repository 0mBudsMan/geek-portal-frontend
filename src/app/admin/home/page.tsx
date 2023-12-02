'use client';
import {
  Card,
  CardHeader,
  CardBody,

} from '@material-tailwind/react';
import {
  Box,
  useColorModeValue,
} from '@chakra-ui/react';


export default function Dashboard() {


const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');


  return (
    <>
      <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
        
      </Box>
    </>
  );
}
