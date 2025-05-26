import React from 'react';
import clsx from 'clsx';

export default function StatusLabelProps({ children, status, disabled }) {
  const key = process.env.CRM_secret_KEY;
  // console.log(key);

  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
        status === 'active' && 'text-green-700 bg-green-100',
        status === 'notActive' && 'text-red-700 bg-red-100',
        status === 'pending' && 'text-orange-700 bg-orange-100',
        status === 'suspended' && 'text-blue-700 bg-blue-100',
        { ['opacity-75 cursor-not-allowed']: disabled },
      )}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </div>
  );
}
