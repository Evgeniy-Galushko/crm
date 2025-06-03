import Header from '@/app/components/header.jsx';
import { getCompany } from '@/lib/api.js';
import getQueryClient from '@/lib/utils/getQueryClient';
import React from 'react';

// export interface PageProps {
//   params: { id: string };
// }

export default async function Page({ params }) {
  const { id } = await params;
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', id],
    queryFn: () => getCompany(id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', id]);

  return <Header>{company?.title}</Header>;
}
