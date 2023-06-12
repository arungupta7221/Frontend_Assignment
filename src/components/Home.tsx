import { useState } from 'react'
import ModelInput from './ModelInput'
import TodoApp from './TodoAppList'
interface Todo {
  id: number
  text: string
  subTodos?: Todo[]
}
const Home = () => {
  const [showModel, setShowModel] = useState(false)
  const [todos, setTodos] = useState<Todo[]>([])
  const [selectedTodosParentId, setSelectedTodosParentId] = useState<number | null>(null)

  const clickHandler = () => {
    setShowModel(true)
  }
  const insertNestedTask = (obj: Todo[], parentId: number, newTaskData: Todo) => {
    for (let i = 0; i < obj.length; i++) {
      let task = obj[i]
      if (task.id === parentId) {
        if (task.subTodos) {
          task.subTodos.push(newTaskData)
        } else {
          task['subTodos'] = [newTaskData]
        }

        return
      } else if (task.subTodos) {
        insertNestedTask(task.subTodos, parentId, newTaskData)
      }
    }
  }
  const handleAddTodo = (inputText: string) => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
      }
      let newTasks = [...todos]
      if (selectedTodosParentId) {
        insertNestedTask(todos, selectedTodosParentId, newTodo)
        setSelectedTodosParentId(null)
      } else {
        newTasks.push(newTodo)
      }

      setTodos(newTasks)
      setShowModel(false)
    }
  }
  const addNestedParent = (id: number) => {
    setShowModel(true)
    setSelectedTodosParentId(id)
  }
  return (
    <div className="flex items-center mt-[18rem] flex-col ">
      <button className=" bg-gray-800 text-white p-3 rounded-lg w-[200px]" onClick={clickHandler}>
        Add a New Task
      </button>
      {todos.length > 0 && <TodoApp todos={todos} addNestedParent={addNestedParent} />}

      {showModel && <ModelInput handleAddTodo={handleAddTodo} />}
    </div>
  )
}

export default Home
