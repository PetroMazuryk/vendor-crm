import React from 'react';
import clsx from 'clsx';

export enum Status {
  Active = 'active',
  NotActive = 'notActive',
  Pending = 'pending',
  Suspended = 'suspended',
}
export interface StatusLableProps {
  children: React.ReactNode;
  status: Status;
  disabled?: boolean;
}

export default function StatusLable({
  children,
  status,
  disabled,
}: StatusLableProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium',
        status === Status.Active && 'text-green-780 bg-green-100',
        status === Status.NotActive && 'text-red-780 bg-red-100',
        status === Status.Pending && 'text-orange-780 bg-orange-100',
        status === Status.Suspended && 'text-blue-780 bg-blue-100',
        { ['opacity-75 cursor-not-allowed']: disabled },
      )}
    >
      <div className="w-1 h-1 mr-2  rounded-full bg-current" />
      {children}
    </div>
  );
}
