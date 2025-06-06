// 'use client';

import React from 'react';
import Header from '@/app/components/header.jsx';
import { notFound } from 'next/navigation.js';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import CompanyInfo from '@/app/components/company-info.jsx';
import CompanyPromotions from '@/app/components/company-promotions.jsx';
import { getCompany, getPromotions } from '@/lib/api.js';
import getQueryClient from '@/lib/utils/getQueryClient.js';

export default async function Page({ params }) {
  const { id } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', id],
    queryFn: () => getPromotions({ companyId: id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]);
  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      Add commentMore actions
      <div className="py-6 px-10 grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CompanyInfo companyId={id} />
        </div>
        <div className="col-span-9">
          <CompanyPromotions companyId={id} />
        </div>
      </div>
      Add commentMore actions
    </HydrationBoundary>
  );
}
