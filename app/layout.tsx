import '../styles/globals.css';
import React from 'react';
import { Header } from '../components/Header';

export default ({ children }: { children: React.ReactNode }) => (
   <html>
   <head />
   <body>
   <Header />
   {children}</body>
   </html>
)
