'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CheckTable from 'views/admin/dataTables/components/CheckTable';
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable';
import { useQuery } from '@tanstack/react-query';
// import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns';
import React from 'react';
import AdminLayout from 'layouts/admin';
import { useRouter } from 'next/navigation';
import {FetchedLeaderboard} from '../../../api/leaderboard/leaderboard'
import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns';

export default function eventName({params}) {

const eventName = params.eventName;
  
  const { data: LeadData } = useQuery({
    queryKey: ['LeadInfo'],
    queryFn:()=> FetchedLeaderboard(eventName),
  });

  if (!LeadData) {
    return <div>Error fetching data</div>;
  }

  const TableData1 = LeadData;
console.log(TableData1);

  type RowObj = {
    position:number;
    name: string;
    prmerged: string;
    githubid: string;
    points: string;
    avatarUrl: string,
    prDetailsURL: string
  };
  



  
  
  const tableDataColumns: RowObj[] = [
    {		
      position:1,
      name: 'Akshay Waghmare',
      githubid: 'adsdkshayw1',
      prmerged: '99',
      points: '232', 
          avatarUrl: "string",
          prDetailsURL: "string"
    },
    {		
      position:2,
      name: 'Akshay Waghmare',
      githubid: 'adsdkshayw1',
      prmerged: '99',
      points: '232', 
          avatarUrl: "string",
          prDetailsURL: "string"
    },
    {
      position:3,
      name:'Shashank Patil',
      githubid: 'shashankpatil28',
      prmerged: '77',
      points: '219', 
          avatarUrl: "string",
          prDetailsURL: "string"
    },
    
  ];



  return (


    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      
         <ColumnsTable tableData={tableDataColumns} eventName={params.eventName} />
         <SimpleGrid columns={3} spacing={4}>
        {LeadData.map((item) => (
          <div key={item.position}>
            <p>Name: {item.name}</p>
            <p>Github ID: {item.githubid}</p>
            <p>PR Merged: {item.prmerged}</p>
            <p>Points: {item.points}</p>
          </div>
        ))}
      </SimpleGrid>
         
    </Box>
  );
}
