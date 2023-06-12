import React, { useState, useEffect } from 'react'

interface Todo {
  id: number
  text: string
  subTodos?: Todo[]
}

const quotes = [
  {
    q: 'The only way to do great work is to love what you do.',
    a: 'Steve Jobs',
  },
  {
    q: 'Believe you can and you’re halfway there.',
    a: 'Theodore Roosevelt',
  },
  {
    q: 'The future belongs to those who believe in the beauty of their dreams.',
    a: 'Eleanor Roosevelt',
  },
  {
    q: 'Don’t watch the clock; do what it does. Keep going.',
    a: 'Sam Levenson',
  },
  {
    q: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    a: 'Winston Churchill',
  },
  {
    q: 'The only limit to our realization of tomorrow will be our doubts of today.',
    a: 'Franklin D. Roosevelt',
  },
  {
    q: 'The secret of getting ahead is getting started.',
    a: 'Mark Twain',
  },
  {
    q: 'If you want to achieve greatness stop asking for permission.',
    a: 'Anonymous',
  },
  {
    q: 'Success is walking from failure to failure with no loss of enthusiasm.',
    a: 'Winston Churchill',
  },
  {
    q: 'The best way to predict the future is to create it.',
    a: 'Peter Drucker',
  },
  {
    q: 'I think it is possible for ordinary people to choose to be extraordinary.',
    a: 'Elon Musk',
  },
  {
    q: 'Strength does not come from winning. Your struggles develop your strengths.',
    a: 'Arnold Schwarzenegger',
  },
]
type TodoAppType = {
  todos: Todo[]
  addNestedParent: (x: number) => void
}
const TodoApp: React.FC<TodoAppType> = ({ todos, addNestedParent }) => {
  console.log(todos)
  // const handleToggleComplete = (id: number) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed: !todo.completed }
  //       }
  //       return todo
  //     }),
  //   )
  // }

  // const handleDeleteTodo = (id: number) => {
  //   setTodos(todos.filter((todo) => todo.id !== id))
  // }
  // const handleAddSubTask = (id: number) => {}

  // useEffect(() => {
  //   const getRandomQuote = () => {
  //     const randomIndex = Math.floor(Math.random() * quotes.length)
  //     setQuote(quotes[randomIndex])
  //   }

  //   getRandomQuote()
  // }, [])

  const totalTodos = todos.length
  const renderTodoList = (todos: Todo[]) =>
    todos.map((todo: Todo) => (
      <div>
        <li
          key={todo.id}
          className={`flex items-center bg-gray-700 p-3 rounded-lg ${'text-white'}`}
        >
          <span className="flex-grow">{todo.text}</span>

          <button
            className="text-blue-500 hover:text-blue-600 ml-2 focus:outline-none text-xl"
            onClick={() => addNestedParent(todo.id)}
          >
            +
          </button>
        </li>
        {Array.isArray(todo.subTodos) && todo.subTodos.length > 0 && (
          <div style={{ paddingLeft: '20px' }}>{renderTodoList(todo.subTodos)}</div>
        )}
      </div>
    ))

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-lg w-full mx-4 p-4 bg-gray-600 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">My Tasks</h1>

        <ul className="space-y-2">{renderTodoList(todos)}</ul>
        {/* <div className="mt-8 text-white">
          <p>
            Total Todos: {totalTodos} | Completed Todos: {completedTodos}
          </p>
          <p className="mt-2">
            <em>"{quote.q}"</em> - {quote.a}
          </p>
        </div> */}
      </div>
    </div>
  )
}

export default TodoApp
