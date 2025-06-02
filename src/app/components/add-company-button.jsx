'use client';

import React from 'react';
import Button from './button.jsx';
import { useRouter } from 'next/navigation.js';
// import dynamic from 'next/dynamic.js';
// import CompanyFormModal from './company-form-modal.jsx';

// const CompanyFormModal = dynamic(() => import('./company-form-modal.jsx'), {
//   ssr: false,
// });

export default function AddCompanyButton({}) {
  const router = useRouter();

  return (
    <>
      {/* <Button
        onClick={() => {
          setShow(true);
        }}
      >
        Add company
      </Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => {
          setShow(false);
        }}
      /> */}

      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
