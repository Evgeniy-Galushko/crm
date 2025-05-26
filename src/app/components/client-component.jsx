'user client';

import React from 'react';
import ServerComponentCopy from './server-component copy.jsx';

export default function ClientComponent({ children }) {
  console.log('Client Component');
  return (
    <div>
      <span>Client Component</span>
      {children}
    </div>
  );
}
