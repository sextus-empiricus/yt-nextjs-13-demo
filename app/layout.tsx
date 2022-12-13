import '../styles/globals.css';
import React from 'react';
import { Header } from '../components/Header';
import Head from './head';

export default ({ children }: { children: React.ReactNode }) => (
   <html>
   <Head />
   <body>
   <Header />
   {children}</body>
   </html>
)
