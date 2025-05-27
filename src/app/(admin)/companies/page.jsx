import React from 'react';

import Header from '@/app/components/header.jsx';
import Toolbar from '@/app/components/toolbar.jsx';
import SearchInput from '@/app/components/search-input.jsx';
import CompanyTable from '@/app/components/company-table.jsx';
import CompanyRow from '@/app/components/company-row.jsx';

export default function Page() {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          status={'StatusPending'}
          promotion={true}
          country={'USA'}
          joinedDate={'27.05.2025'}
        />
      </CompanyTable>
    </>
  );
}
