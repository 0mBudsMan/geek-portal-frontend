'use client';
import { Box, SimpleGrid } from '@chakra-ui/react';
import CheckTable from 'views/admin/dataTables/components/CheckTable';
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable';

import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns';
import React from 'react';
import AdminLayout from 'layouts/admin';

export default function DataTables() {
  return (

    
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
         <ColumnsTable tableData={tableDataColumns} />
     
    </Box>
  );
}
