import React, { ReactNode } from 'react';
import { Todo } from '../../../../types/todo.interface';
import Link from 'next/link';

const fetchTodos = async (): Promise<Todo[]> => {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
   return await res.json();
};

const TodosList = async (): Promise<ReactNode> => {
   const todos = await fetchTodos();
   return (
      <div>
         {todos.map((el) => (<p key={el.id}>
            <Link href={`/todos/${el.id}`}>Todo: {el.id}</Link>
         </p>))}
      </div>

   );
};

export { TodosList };