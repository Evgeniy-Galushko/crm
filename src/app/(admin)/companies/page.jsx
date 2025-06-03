import React from 'react';
import CompanyRow from '../../components/company-row.jsx';
import CompanyTable from '../../components/company-table.jsx';
import getQueryClient from '@/lib/utils/getQueryClient.js';
import { getCompanies } from '@/lib/api.js';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
// import Header from '../../components/header.jsx';
// import SearchInput from '../../components/search-input.jsx';
// import Toolbar from '../../components/toolbar.jsx';

export default async function Page({}) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    // <CompanyTable>
    //   <CompanyRow
    //     id={1}
    //     category="Products"
    //     company="Costco"
    //     status="StatusPending"
    //     promotion={true}
    //     country="USA"
    //     joinedDate="02.19.2023"
    //   />
    // </CompanyTable>
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}
