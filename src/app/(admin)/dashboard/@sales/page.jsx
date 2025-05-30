import React from 'react';
import { getSummarySales } from '../../../../lib/api.js';
import SummaryTable from '../../../components/summary-table.jsx';
import SummaryTableHeader from '../../../components/summary-table-header.jsx';
import SummaryTableCell from '../../../components/summary-table-cell.jsx';
import DashboardCard from '../../../components/dashboard-card.jsx';
import MagicButton from '@/app/components/magic-button.jsx';

// export interface PageProps {}

export default async function Page({}) {
  const data = await new Promise((res) => {
    setTimeout(() => {
      res(getSummarySales());
    }, 1000);
  });

  return (
    <DashboardCard
      label={
        <>
          "Sales details" <MagicButton />{' '}
        </>
      }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
