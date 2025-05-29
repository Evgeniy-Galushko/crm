'use client';

import Button from '@/app/components/button.jsx';
import React from 'react';

export default function Error({ error, reset }) {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button
        onClick={() => {
          reset();
        }}
      >
        Try again
      </Button>
    </div>
  );
}
