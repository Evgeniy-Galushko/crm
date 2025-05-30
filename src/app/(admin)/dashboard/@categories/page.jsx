import { getSummaryCategories } from '../../../../lib/api.js';
import DashboardCard from '../../../components/dashboard-card.jsx';
import StatCard from '../../../components/stat-card/index.js';
import React from 'react';

// export interface PageProps {}

export default async function Page({}) {
  const data = await getSummaryCategories();

  return (
    <DashboardCard>
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {data.map(({ categoryId, categoryTitle, count }) => (
          <div key={categoryId} className="col-span-3">
            <StatCard type={'dark'} label={categoryTitle} counter={count} />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
