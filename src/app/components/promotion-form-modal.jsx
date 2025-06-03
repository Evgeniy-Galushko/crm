'use client';

import React from 'react';
import Modal from './modal.jsx';
import PromotionForm from './promotion-form.jsx';
// export interface PromotionFormModal extends ModalProps {
//   companyId: string;
// }

export default function PromotionFormModal({ companyId, onClose, ...rest }) {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
}
