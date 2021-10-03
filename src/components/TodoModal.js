import React, { memo } from "react";
const todoModal = memo(({ show, newTodo, handleAdd, handleChangeForm }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="wrap">
      <form className="form">
        <input
          name="title"
          type="text"
          value={newTodo.title}
          onChange={handleChangeForm}
          placeholder="Todo Title"
        />
        <input
          className="red"
          type="button"
          value="Add Todo"
          onClick={() => handleAdd(true)}
        />
      </form>
    </div>
  );
});
export default todoModal;
