'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';
import Modal from '@/app/components/modal';

export default function CompanyFormModal({ onSubmit, ...rest }) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
