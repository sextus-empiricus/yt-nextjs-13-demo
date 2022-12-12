import '../styles/globals.css';
import React from 'react';
import { Header } from '../components/Header';

export default function RootLayout({
                                      children,
                                   }: {
   children: React.ReactNode
}) {
   return (
      <html>
      <head />
      <body>
      <Header />
      {children}</body>
      </html>
   );
}
