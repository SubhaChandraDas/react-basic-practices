import React, { memo } from "react";

const Todo = memo(({ todo, onToggle }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.done}
      onChange={() => onToggle(todo.id)}
    />
    {todo.title}
  </li>
));
export default Todo;
