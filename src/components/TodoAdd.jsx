import axios from "axios"
import { useState } from "react"


const TodoAdd = ({getTodos}) => {
    const [todo, setTodo] = useState('')
    const [descr, setDescr] = useState('')

    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
    const handleChange2=(e)=>{
        setDescr(e.target.value)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault(); //button un type i submit ise kullanilir Cünkü submit direct refresh yapar
        let url='https://64b022b9c60b8f941af54a36.mockapi.io/api/todo'
        try {
            await axios.post(url,{todo,descr})
        } catch (error) {
            
        }

        setTodo('')
        setDescr('')
        getTodos()
    }

  return (
    <div className="container w-50 mt-3">
        <h2 className="text-danger text-center">Todo App</h2>
        <form  onSubmit={handleSubmit} className="form-control  p-3 bg-info-subtle">
            <div className="mb-3 ">
                <label htmlFor="todo" className="form-label">Todo</label>
                 <input type="text" className="form-control w-100 me-3" onChange={handleChange} value={todo} id="todo"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" className="form-control w-100 me-3" onChange={handleChange2} value={descr} id="desc"/>
            </div>
            <button type="submit" className="btn btn-danger w-100">Add Todo</button>
        </form>
    </div>
  )
}

export default TodoAdd