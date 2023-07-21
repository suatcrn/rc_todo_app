import { useEffect, useState } from "react";

const TodoEdit = ({ itemAl, handleEdit }) => {
  console.log(itemAl);
  const { todo, id,descr } = itemAl;
  const [editedTodo, setEditedTodo] = useState(todo);
  const [editedDesc, setEditedDesc] = useState(descr);

  const handleChangeTodo = (e) => {
    setEditedTodo(e.target.value);
  };
  const handleChangeDesc = (e) => {
    setEditedDesc(e.target.value);
  };

  const handleSubmit = () => {
    handleEdit(id, editedTodo,editedDesc);
  };

  useEffect(() => {
    setEditedTodo(todo);
    setEditedDesc(descr)
  }, [todo,descr]);

  return (
    <div className="modal fade" id="edit-modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5 text-danger">Edit Todo</h1>
          </div>
          <div className="modal-body">
            <form >
                <div className="mb-3">
                    <label className="form-label text-danger" htmlFor="editedTodo">
                    Todo
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="editedTodo"
                    onChange={handleChangeTodo}
                    value={editedTodo}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label text-danger" htmlFor="editedTodo">
                    Description
                    </label>
                    <input
                    type="text"
                    className="form-control"
                    id="editedTodo"
                    onChange={handleChangeDesc}
                    value={editedDesc}
                    />
                </div>

            </form>
           
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoEdit;
