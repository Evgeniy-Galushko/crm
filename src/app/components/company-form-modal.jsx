'use client';

import React from 'react';
import Modal from './modal.jsx';
import CompanyForm from './company-form.jsx';
// import CompanyForm from '@/app/components/company-form.jsx';
// import Modal from '@/app/components/modal.jsx';

export default function CompanyFormModal({ onSubmit, ...rest }) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
