import React from 'react';

export default function ServerComponent({ children }) {
  console.log('Server Component');
  return (
    <div>
      <span>Server Component</span>
      {children}
    </div>
  );
}
