import AppLayout from "@/app/shared/layout/AppLayout";


export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        {children}
    </>
  );
}
