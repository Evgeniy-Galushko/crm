'use client';
import React from 'react';
import Button from '../../components/button.jsx';

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
