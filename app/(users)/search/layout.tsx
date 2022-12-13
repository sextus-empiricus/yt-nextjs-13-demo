import React from 'react';
import Search from './Search';

export default ({ children }: { children: React.ReactNode }) => (
   <main className='flex space-x-4 divide-x-2 p-5'>
      <div>
         <h1>Search</h1>
      </div>

      <div className='flex pl-5'>
         <Search />
         <div className='flex pl-5'>{children}</div>
      </div>
   </main>
)
