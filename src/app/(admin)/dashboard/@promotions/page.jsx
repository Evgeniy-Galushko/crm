import React from 'react';
import { getPromotions, getSummaryPromotions } from '../../../../lib/api.js';
import DashboardCard from '../../../components/dashboard-card.jsx';
import SummaryTable from '../../../components/summary-table.jsx';
import SummaryTableHeader from '../../../components/summary-table-header.jsx';
import SummaryTableCell from '../../../components/summary-table-cell.jsx';

// export interface PageProps {}

export default async function Page({}) {
  // const data = await getSummaryPromotions();

  const data = await getPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }) => (
          <tr key={id}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
