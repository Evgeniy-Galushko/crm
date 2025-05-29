import CompanyRow from '../../components/company-row.jsx';
import CompanyTable from '../../components/company-table.jsx';
import Header from '../../components/header.jsx';
import SearchInput from '../../components/search-input.jsx';
import Toolbar from '../../components/toolbar.jsx';
import React from 'react';

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
