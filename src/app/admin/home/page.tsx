'use client';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";

import {
  Box,
  Flex,
  FormLabel,
  Image,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
// import MiniCalendar from 'components/calendar/MiniCalendar';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from 'react-icons/md';
import CheckTable from 'views/admin/default/components/CheckTable';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import DailyTraffic from 'views/admin/default/components/DailyTraffic';
import PieCard from 'views/admin/default/components/PieCard';
import Tasks from 'views/admin/default/components/Tasks';
import TotalSpent from 'views/admin/default/components/TotalSpent';
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue';
import tableDataCheck from 'views/admin/default/variables/tableDataCheck';
import tableDataComplex from 'views/admin/default/variables/tableDataComplex';
// Assets
import Usa from 'img/dashboards/usa.png';

// export default function Default() {
//   // Chakra Color Mode

//   return (
//     <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
//      dsfdsds


//      <h1 className="text-3xl font-bold text-center underline">
//       Hello world!
//     </h1>
//     </Box>
//   );





export default function Example() {



  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');


  return (
   <>
   <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>

   <div className="w-full  p-4 ">
      <Card
        shadow={false}
        className="relative grid h-[85vh] w-full  items-end justify-center overflow-hidden text-center 
        "
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-md bg-[url('https://assets.devfolio.co/hackathons/75c819f20105449991e214a03c92b6fd/assets/cover/273.png')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/100 via-black/30" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"/> */}
          <h3 className="  text-3xl font-bold text-white">Open Code</h3>
          <div className=" gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            A month-long program starting in December for students to start
            their journey in the world of open source.
          </div>
          <button
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 my-7"
          >


            {" "}
            Register for Opencode{" "}
          </button>


        </CardBody>
      </Card>
    </div>
   
    </Box>
   </>
  )
}

