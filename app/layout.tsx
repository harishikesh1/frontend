"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import toast, { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <GoogleOAuthProvider clientId="71644079894-v5uuhpfl5rd5mja4plvqsdv4u0nqv2eh.apps.googleusercontent.com">
            {children}
            <Toaster />
            <ReactQueryDevtools/>
          </GoogleOAuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
