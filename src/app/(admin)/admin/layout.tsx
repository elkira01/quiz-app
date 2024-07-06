import AppLayout from "@/app/shared/layout/AppLayout";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className='container contain-content'>
        {children}
    </div>
  );
}
