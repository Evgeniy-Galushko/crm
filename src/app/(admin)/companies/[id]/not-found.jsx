'use client';

import Link from 'next/link.js';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <p>Could not found compfny</p>
      <Link href="/companies" className="text-blue-500">
        Bask to companies
      </Link>
    </div>
  );
}
