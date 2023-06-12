import React from 'react'

interface Todo {
  id: number
  text: string
  subTodos?: Todo[]
}

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
