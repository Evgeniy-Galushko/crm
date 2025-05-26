'use client';

import clsx from 'clsx';
import { Field } from 'formik';
import React from 'react';

export default function InputField({ label, id, ...rest }) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className={clsx('mb-2 text-base color-gray-900')}>
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 h-11 test-sm rounded border border-gray-300 shadow"
      />
    </div>
  );
}
