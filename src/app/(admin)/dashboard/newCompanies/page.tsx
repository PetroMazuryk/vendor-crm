import Header from '@/app/components/header';
import React from 'react';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard / New companies</Header>
      <div className="text-center text-green-600 bg-zinc-200 p-4 ">
        Some additional info
      </div>
    </>
  );
}
