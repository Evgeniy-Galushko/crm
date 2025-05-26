'use client';

import React, { useState } from 'react';
import Button from './button.jsx';
import dynamic from 'next/dynamic.js';
// import CompanyFormModal from './company-form-modal.jsx';

const CompanyFormModal = dynamic(() => import('./company-form-modal.jsx'), {
  ssr: false,
});

export default function AddCompanyButton({}) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button
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
      />
    </>
  );
}
