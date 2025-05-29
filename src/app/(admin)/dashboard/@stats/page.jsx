import React from 'react';
import { getSummaryStats } from '../../../../lib/api.js';
import StatCard from '../../../components/stat-card/stat-card.jsx';

// export interface PageProps {}

const labelByStat = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page({}) {
  const data = await getSummaryStats();

  return (
    <div className="grid grid-cols-12 gap-5">
      {Object.keys(labelByStat).map((key) => (
        <div key={key} className="col-span-3">
          <StatCard
            type={'gradient'}
            label={labelByStat[key]}
            counter={data[key]}
          />
        </div>
      ))}
    </div>
  );
}
