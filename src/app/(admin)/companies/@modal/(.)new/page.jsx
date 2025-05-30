'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/app/components/modal.jsx';
import CompanyForm from '@/app/components/company-form.jsx';

// export interface PageProps {}

export default function Page({}) {
  const router = useRouter();
  return (
    <Modal show={true} onClose={() => router.back()}>
      <CompanyForm onSubmit={console.log} />
    </Modal>
  );
}
