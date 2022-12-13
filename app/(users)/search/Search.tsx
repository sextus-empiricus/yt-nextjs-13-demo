'use client';

import React, { FormEvent, ReactElement, useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = (): ReactElement => {
   const [searchValue, setSearchValue] = useState<string>('');
   const router = useRouter();

   const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/search/${searchValue}`);
   };

   return (
      <form onSubmit={submitHandler}>
         <input
            type='text'
            value={searchValue}
            placeholder='Search for...'
            onChange={e => setSearchValue(e.currentTarget.value)}
            className='px-2 py-1'
         />
         <button type='submit' className='px-4 py-2 text-white bg-blue-600 rounded-xl'>Submit</button>
      </form>
   );
};

export default Search;