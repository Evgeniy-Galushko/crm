import React from 'react';
import CompanyRow from '../../components/company-row.jsx';
import CompanyTable from '../../components/company-table.jsx';
// import Header from '../../components/header.jsx';
// import SearchInput from '../../components/search-input.jsx';
// import Toolbar from '../../components/toolbar.jsx';

export default function Page() {
  return (
    <CompanyTable>
      <CompanyRow
        id={1}
        category="Products"
        company="Costco"
        status="StatusPending"
        promotion={true}
        country="USA"
        joinedDate="02.19.2023"
      />
    </CompanyTable>
  );
}
