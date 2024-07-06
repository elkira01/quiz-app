'use client'

import AdminLayout from "@/app/(admin)/_components/layout/AdminLayout";
export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className='h-full'>
        <AdminLayout>
          {children}
        </AdminLayout>
    </div>
  );
}
