import { Todo } from '@/typing'
import Link from 'next/link'
import React from 'react'

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const todos: Todo[] = await res.json()
  console.log(todos)
  return todos
}

export default async function TodosList() {
  const todos = await fetchTodos()

  return (
    <section>
      <header>
        <h1>Todos</h1>
      </header>
      
      <div className='grid'>
        {todos?.map((todo) => {
          return <Todo key={todo.id} todo={todo} />
        })}
      </div>
        
      
    </section>
  )
}

function Todo({todo}: any) {
  const {userId, id, title, content} = todo || {}
  return (
    <article>
      <header>{title}</header>
      <Link href={`todos/${id}`}>View</Link>
    </article>
  )
}