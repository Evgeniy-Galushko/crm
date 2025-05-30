import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Sidebar from './components/sidebar.jsx';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
