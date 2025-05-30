import Header from '@/app/components/header.jsx';
import React from 'react';

// export interface PageProps {
//   params: { id: string };
// }

export default function Page({ params }) {
  return <Header>{`Company (${params.id})`}</Header>;
}
