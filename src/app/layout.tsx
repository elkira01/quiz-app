import type { Metadata } from "next";
import "./globals.css";
import {StoreProvider} from "@/app/shared/stores/provider";

export const metadata: Metadata = {
  title: "Quiz City",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
        <body>
            <StoreProvider>
                {children}
            </StoreProvider>
        </body>
    </html>
  );
}
