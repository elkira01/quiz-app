'use client'

import AdminLayout from "@/app/(admin)/_components/layout/AdminLayout";
export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminLayout children={children}/>
}
