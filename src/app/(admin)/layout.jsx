import Sidebar from '../components/sidebar.jsx';
import React from 'react';

export default function Layout({ children }) {
  // console.log('rengering');
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
