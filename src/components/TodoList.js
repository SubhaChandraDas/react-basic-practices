import React, { useCallback, useState } from "react";
import produce from "immer";
import TodoModal from "./TodoModal";
import Todo from "./Todo";
import DisplayQuote from "./DisplayQuote";
import ErrorThrowingComponent from "./ErrorThrowingComponent";
import ErrorBoundary from "./ErrorBoundary";
import GreenCounter from "./GreenCounter";
import BlueCounter from "./BlueCounter";
import ReducerCounter from "./ReducerCounter";

const TodoList = () => {
  //todo modal state
  const [todoModalState, setTodoModal] = useState(false);
  const [newTodo, setNewTodo] = useState({
    id: "todo_" + Math.random(),
    title: "",
    done: false
  });

  const [todos, setTodos] = useState([
    {
      id: "React",
      title: "Learn React",
      done: true
    },
    {
      id: "Immer",
      title: "Try immer",
      done: false
    }
  ]);

  const unfinishedTodoCount = todos.filter((todo) => todo.done === false)
    .length;

  const handleToggle = useCallback((id) => {
    setTodos(
      produce((draft) => {
        const todo = draft.find((todo) => todo.id === id);
        todo.done = !todo.done;
      })
    );
  }, []);

  const openModal = () => {
    setTodoModal(!todoModalState);
  };

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setNewTodo(
      produce((draft) => {
        const newDraft = {
          ...draft,
          id: "todo_" + Math.random(),
          [name]: value
        };
        return newDraft;
      })
    );
  };

  const handleAdd = useCallback((newTodo) => {
    setTodos(
      produce((draft) => {
        draft.push(
          newTodo
            ? { ...newTodo }
            : {
                id: "todo_" + Math.random(),
                title: "A new todo " + +Math.random(),
                done: false
              }
        );
      })
    );
  }, []);

  let [showQuoteState, setShowQuote] = useState(false);
  let [quoteId, setQuoteId] = useState(1);
  const showQuote = () => {
    setShowQuote(true);
    setQuoteId(Math.floor(Math.random() * 10 + 1));
  };

  return (
    <div>
      <button className="red" onClick={() => handleAdd(false)}>
        Add Todo
      </button>
      <button className="green" onClick={openModal}>
        {todoModalState ? "Close" : "Open"} form
      </button>
      <button className="blue" onClick={showQuote}>
        Show Random Quote
      </button>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} onToggle={handleToggle} />
        ))}
      </ul>
      Tasks left: {unfinishedTodoCount}
      <TodoModal
        show={todoModalState}
        handleChangeForm={handleChangeForm}
        newTodo={newTodo}
        handleAdd={handleAdd}
      />
      <h1>Random Quotes</h1>
      <DisplayQuote show={showQuoteState} quoteId={quoteId} />
      <h1>Animes</h1>
      <ErrorBoundary>
        <ErrorThrowingComponent animeName="Boku no Hero academia" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorThrowingComponent animeName="One Punch Man" />
      </ErrorBoundary>
      <ErrorBoundary>
        <ErrorThrowingComponent animeName="One Piece" />
      </ErrorBoundary>
      <GreenCounter />
      <BlueCounter />
      <ReducerCounter />
    </div>
  );
};

export default TodoList;
