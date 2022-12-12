import React, { ReactElement } from 'react';
import { TodosList } from './components/TodosList';

const TodosPage = (): ReactElement => {
   return (
      <>
         <h1>Todos page🗓️</h1>
         {/* @ts-ignore */}
         <TodosList />
      </>
   );
};

export default TodosPage;