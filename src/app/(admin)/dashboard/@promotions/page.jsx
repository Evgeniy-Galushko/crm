import React from 'react';
import { getSummaryPromotions } from '../../../../lib/api.js';
import DashboardCard from '../../../components/dashboard-card.jsx';
import SummaryTable from '../../../components/summary-table.jsx';
import SummaryTableHeader from '../../../components/summary-table-header.jsx';
import SummaryTableCell from '../../../components/summary-table-cell.jsx';

// export interface PageProps {}

export default async function Page({}) {
  const data = await getSummaryPromotions();

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
        {data.map(({ promotionId, promotionName, companyTitle, discount }) => (
          <tr key={promotionId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{promotionName}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}%`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
