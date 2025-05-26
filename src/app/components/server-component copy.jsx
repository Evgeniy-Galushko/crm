import { headers } from 'next/headers.js';
import React from 'react';

export default function ServerComponentCopy({ children }) {
  console.log('Server Component Copy');
  console.log(headers());
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
}
