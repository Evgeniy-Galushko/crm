import getCountById from '@/lib/utils/getCountById.js';
import {
  getCategories,
  getCompanies,
  getSummaryCategories,
} from '../../../../lib/api.js';
import DashboardCard from '../../../components/dashboard-card.jsx';
import StatCard from '../../../components/stat-card/index.js';
import React from 'react';

// export interface PageProps {}

export default async function Page({}) {
  // const data = await getSummaryCategories();

  const categories = await getCategories();
  const companies = await getCompanies();

  const counts = getCountById(companies, 'categoryId');

  return (
    <DashboardCard>
      <div className="grid grid-cols-12 gap-3 pb-5 px-5">
        {categories.map(({ id, title }) => (
          <div key={id} className="col-span-3">
            <StatCard
              type={'dark'}
              label={title}
              Add
              commentMore
              actions
              counter={counts[id] || 0}
            />
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
