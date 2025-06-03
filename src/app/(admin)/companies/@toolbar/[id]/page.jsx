import AddPromotionButton from '@/app/components/add-promotion-button.jsx';
import SearchInput from '@/app/components/search-input.jsx';
import Toolbar from '@/app/components/toolbar.jsx';
import React from 'react';

// export interface PageProps {}

export default async function Page({ params }) {
  const { id } = await params;
  return (
    <Toolbar action={<AddPromotionButton companyId={id} />}>
      <SearchInput />
    </Toolbar>
  );
}
