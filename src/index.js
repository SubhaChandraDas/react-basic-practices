import React from "react";
import { render } from "react-dom";

import "./styles.css";

import TodoList from "./components/TodoList";

// const TodoList = () => {
//   //todo modal state
//   const [todoModalState, setTodoModal] = useState(false);
//   const [newTodo, setNewTodo] = useState({
//     id: "todo_" + Math.random(),
//     title: "",
//     done: false
//   });

//   const [todos, setTodos] = useState([
//     {
//       id: "React",
//       title: "Learn React",
//       done: true
//     },
//     {
//       id: "Immer",
//       title: "Try immer",
//       done: false
//     }
//   ]);
//   const unfinishedTodoCount = todos.filter((todo) => todo.done === false)
//     .length;

//   const handleToggle = useCallback((id) => {
//     setTodos(
//       produce((draft) => {
//         const todo = draft.find((todo) => todo.id === id);
//         todo.done = !todo.done;
//       })
//     );
//   }, []);

//   const openModal = () => {
//     setTodoModal(!todoModalState);
//   };

//   const handleChangeForm = (event) => {
//     const { name, value } = event.target;
//     setNewTodo(
//       produce((draft) => {
//         const newDraft = {
//           ...draft,
//           id: "todo_" + Math.random(),
//           [name]: value
//         };
//         return newDraft;
//       })
//     );
//   };

//   const handleAdd = useCallback((newTodo = null) => {
//     setTodos(
//       produce((draft) => {
//         draft.push(
//           newTodo
//             ? { ...newTodo }
//             : {
//                 id: "todo_" + Math.random(),
//                 title: "A new todo",
//                 done: false
//               }
//         );
//       })
//     );
//   }, []);

//   return (
//     <div>
//       <button className="red" onClick={handleAdd}>
//         Add Todo
//       </button>
//       <button className="green" onClick={openModal}>
//         {todoModalState ? "Close" : "Open"} form
//       </button>
//       <ul>
//         {todos.map((todo) => (
//           <Todo todo={todo} key={todo.id} onToggle={handleToggle} />
//         ))}
//       </ul>
//       Tasks left: {unfinishedTodoCount}
//       <TodoModal
//         show={todoModalState}
//         handleChangeForm={handleChangeForm}
//         newTodo={newTodo}
//         handleAdd={handleAdd}
//       />
//     </div>
//   );
// };

// const Todo = memo(({ todo, onToggle }) => (
//   <li>
//     <input
//       type="checkbox"
//       checked={todo.done}
//       onChange={() => onToggle(todo.id)}
//     />
//     {todo.title}
//   </li>
// ));

// const TodoModal = memo(({ show, newTodo, handleAdd, handleChangeForm }) => {
//   if (!show) {
//     return null;
//   }
//   return (
//     <div className="wrap">
//       <form className="form">
//         <input
//           name="title"
//           type="text"
//           value={newTodo.title}
//           onChange={handleChangeForm}
//           placeholder="Todo Title"
//         />
//         <input
//           className="red"
//           type="button"
//           value="Add Todo"
//           onClick={() => handleAdd(newTodo)}
//         />
//       </form>
//     </div>
//   );
// });

render(<TodoList />, document.getElementById("root"));
