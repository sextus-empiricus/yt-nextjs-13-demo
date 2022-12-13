import React, { ReactElement } from 'react';
import search from '../Search';

interface Props {
   params: {
      searchTerm: string
   };
}

interface SearchResult {
   organic_results: [
      {
         position: number,
         title: string,
         link: string;
         thumbnail: string;
         snippet: string
      }
   ];
}

const searchFn = async (term: string): Promise<SearchResult> => {
   const res = await fetch(`https://serpapi.com/search.json?q=${term}&api_key=${process.env.SERPAPI_KEY}`);
   return await res.json();
};

const SearchResultsPage = async ({ params: { searchTerm } }: Props): Promise<ReactElement> => {
   // fetch for `searchTerm` ;
   const searchResult = await searchFn(searchTerm);
   return (
      <div>
         <p>You searched for:</p>
         <ol className='space-y-5 p-5'>
            {
               searchResult.organic_results.map(el => (
                  <li className='list-decimal'>
                     <p className='font-bold'>{el.title}</p>
                     <p>{el.snippet}</p>
                  </li>
               ))
            }
         </ol>
      </div>

   );
};

export default SearchResultsPage;