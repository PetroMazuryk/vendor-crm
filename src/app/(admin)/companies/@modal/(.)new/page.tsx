'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/company-form-modal';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();
  return <CompanyFormModal show={true} onClose={() => router.back()} />;
}
// 'use client';
// import React from 'react';
// import { useRouter } from 'next/navigation';
// import CompanyForm from '@/app/components/company-form';
// import Modal from '@/app/components/modal';

// export interface PageProps {}

// export default function Page({}: PageProps) {
//   const router = useRouter();
//   return (
//     <Modal show={true} onClose={() => router.back()}>
//       <CompanyForm onSubmit={console.log} />
//     </Modal>
//   );
// }
