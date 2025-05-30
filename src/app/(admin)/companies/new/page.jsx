'use client';

// import Header from '@/app/components/header.jsx';
import React from 'react';
import CompanyForm from '@/app/components/company-form.jsx';

// // export interface PageProps {
// //   params: { id: string };
// // }

// export default function Page({ params }) {
//   return <Header>{`Company (${params.id})`}</Header>;
// }

// export interface PageProps {
//   params: { id: string };
// }

export default function Page() {
  return (
    <div className="py-6 px10">
      <CompanyForm onSubmit={console.log} />
    </div>
  );
}
