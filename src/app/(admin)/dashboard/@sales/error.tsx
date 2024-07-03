'use client';
import React from 'react';

export interface ErrorComponentProps {
  error: Error;
}

export default function ErrorComponent({}: ErrorComponentProps) {
  return (
    <div className="text-center  p-20 text-red-600">
      Unexpected error inside slot sales
    </div>
  );
}
