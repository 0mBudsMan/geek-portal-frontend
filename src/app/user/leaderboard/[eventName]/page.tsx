'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CheckTable from 'views/admin/dataTables/components/CheckTable';
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable';
import { useQuery } from '@tanstack/react-query';
// import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns';
import React from 'react';
import AdminLayout from 'layouts/admin';
import { useRouter } from 'next/navigation';
import { FetchedLeaderboard } from '../../../api/leaderboard/leaderboard';
import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns';
import { RingLoader } from 'react-spinners';

export default function EventName({ params }: { params: { eventName: string } }) {
  const eventName = params.eventName;

  const { data: LeadData, isLoading } = useQuery({
    queryKey: ['LeadInfo'],
    queryFn: () => FetchedLeaderboard(eventName),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RingLoader color="#36d7b7" />
      </div>
    );
  }

  type RowObj = {
    position: number;
    name: string;
    prmerged: string;
    githubid: string;
    points: string;
    avatarUrl: string;
    prDetailsURL: string;
  };

  const tableDataColumns: RowObj[] = LeadData.map((item, index) => {
    return {
      position: index + 1,
      name: item.name,
      prmerged: item.prmerged,
      githubid: item.githubid,
      points: item.points,
      avatarUrl: item.avatarUrl,
      prDetailsURL: item.prDetailsURL,
      };
  }
  );

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <ColumnsTable tableData={tableDataColumns} eventName={params.eventName} />
      <SimpleGrid columns={3} spacing={4}>
      </SimpleGrid>
    </Box>
  );
}
