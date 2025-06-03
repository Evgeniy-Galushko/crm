import AddPromotionButton from '@/app/components/add-promotion-button.jsx';
import SearchInput from '@/app/components/search-input.jsx';
import Toolbar from '@/app/components/toolbar.jsx';
import React from 'react';

// export interface PageProps {}

export default function Page({ params }) {
  return (
    <Toolbar action={<AddPromotionButton companyId={params.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
