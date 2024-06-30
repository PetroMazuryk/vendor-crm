import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;

  categories: React.ReactNode;
  countries: React.ReactNode;
}

export default function Layout({
  children,

  categories,
  countries,
}: LayoutProps) {
  return (
    <div>
      {children}
      <main className="grid grid-cols-12 gap-5 py-10 pl-10 pr-7">
        <div className="col-span-7">{categories}</div>
        <div className="col-span-6">{countries}</div>
      </main>
    </div>
  );
}
