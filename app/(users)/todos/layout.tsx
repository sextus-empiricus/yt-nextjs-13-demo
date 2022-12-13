import { TodosList } from './components/TodosList';
import { ReactNode } from 'react';

interface Props {
   children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
   <main className='flex'>
      <div>
         {/*@ts-ignore*/}
         <TodosList />
      </div>
      <div className='flex-1'>{children}</div>
   </main>
);
export default RootLayout;