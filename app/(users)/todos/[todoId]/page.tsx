import React, { ReactElement } from 'react';
import { Todo } from '../../../../types/todo.interface';
import { notFound } from 'next/navigation';

export const dynamicParams = true;

interface Props {
   params: {
      todoId: string
   };
}

const fetchTodo = async (todoId: string): Promise<Todo> => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } });
   return await res.json();
};
const TodoPage = async ({ params: { todoId } }: Props): Promise<ReactElement> => {
   const todo = await fetchTodo(todoId);
   if (!todo.id) return notFound();
   return (
      <div className='bg-yellow-200 p-10 border-1 m-2 shadow-lg rounded-md'>
         <h1>Todo page: #{todoId}</h1>
         <p>Title: {todo.title}</p>
         <p>Completed: {todo.completed ? 'yes' : 'not yet'}</p>
         <p className='border-t border-black mt-5 text-right'>By user: {todo.userId}</p>
      </div>
   );
};

export default TodoPage;

export async function generateStaticParams() {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos');
   const todos: Todo[] = (await res.json()).slice(0, 10);

   return todos.map((el) => ({
      todoId: el.id.toString(),
   }));
}