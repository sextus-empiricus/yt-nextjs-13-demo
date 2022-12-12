import React, { ReactElement } from 'react';
import Link from 'next/link';

interface Props {

}

const Header = (props: Props): ReactElement => {
   return (
      <header className='p-5 bg-blue-500 flex gap-x-2'>
         <Link href='/' className='px-2 py-1 bg-white text-blue-500 rounded-lg'>Home</Link>
         <Link href='/todos' className='px-2 py-1 bg-white text-blue-500 rounded-lg'>Todos</Link>
         <Link href='/search' className='px-2 py-1 bg-white text-blue-500 rounded-lg'>Search</Link>
      </header>

   );
};

export { Header };