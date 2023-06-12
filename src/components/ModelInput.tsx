import './modelInput.css'
import { useState } from 'react'
type ModelInput = {
  handleAddTodo: (x: string) => void
}
const ModelInput: React.FC<ModelInput> = ({ handleAddTodo }) => {
  const [inputText, setInputText] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  return (
    <div className="overlay">
      <div className="popup_card">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className=" bg-gray-700 text-white placeholder-gray-400 border-gray-400 border-2 p-2 rounded-lg mr-2 focus:outline-none"
          placeholder="Add a new todo..."
        />
        <button
          onClick={() => handleAddTodo(inputText)}
          className="bg-[#246bfd] text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none mt-2"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default ModelInput
