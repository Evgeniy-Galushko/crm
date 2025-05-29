'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/header.jsx';
import { notFound } from 'next/navigation.js';

export default function Page({ params }) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <>
      <Header>Companies ({params.id})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
