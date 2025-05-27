import Header from '@/app/components/header.jsx';
import React from 'react';

export default function Page({ params }) {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
