import axios from "axios";
import TodoEdit from "./TodoEdit";
import { useState } from "react";

const TodoList = ({ todoList, getTodos }) => {
  const [itemSend, setItemSend] = useState({})

  const handleDelete = async (id) => {
    let url = `https://64b022b9c60b8f941af54a36.mockapi.io/api/todo/${id}`;
    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error);
    }
    getTodos();
  };

  const handleEdit = async(id, todo,descr) => {
    let url =`https://64b022b9c60b8f941af54a36.mockapi.io/api/todo/${id}`
    try {
        await axios.put(url,{todo,descr})
    } catch (error) {
        console.log(error);
    }
    getTodos()
  }

  return (
    <div className="container w-50 mt-4">
      <h2 className="text-danger text-center">Todo List</h2>
      {todoList.map((item, i) => {
        const { todo, id, descr } = item;
        return (
          <div
            className="row bg-success-subtle p-3 m-0 mb-2 rounded-2"
            key={i} //key degeri tekrar eden ögenin en parent ina verilir
          >
            <div className="col-4">
              <p className="m-0">{todo}</p>
            </div>
            <div className="col-6">
              <p className="m-0">{descr}</p>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <i
                className="fa-regular fa-pen-to-square me-3"
                data-bs-toggle="modal"
                data-bs-target="#edit-modal"
                onClick={()=>setItemSend(item)}
              ></i>
              <i
                onClick={() => handleDelete(id)}
                className="fa-solid fa-trash"
              ></i>
            </div>
          </div>
        );
      })}
      <TodoEdit itemAl={itemSend}  handleEdit={handleEdit} />
    </div>
  );
};

export default TodoList;
