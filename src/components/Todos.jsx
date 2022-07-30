import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../redux-toolkit/todoSlice.js";

const Todos = () => {
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const addHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ title: value }));
  };
  return (
    <div className="w-4/5 flex flex-col items-center m-12 bg-orange-300 p-4 rounded-lg box-border   ">
      <input
        className="w-2/4 px-8 py-4 placeholder:text-xl placeholder:text-slate-400 block bg-white border border-orange-300 rounded-md  shadow-sm focus:outline-none  sm:text-sm"
        placeholder="My todos List..."
        type="text"
        name="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className=" py-3 px-8 mt-3 text-xl rounded-2xl bg-slate-700 hover:bg-slate-400  text-white "
        type="submit"
        onClick={addHandler}
      >
        Submit
      </button>
      <div className=" flex flex-col items-center justify-center box-border ">
        {todos?.map((todo) => (
          <div
            key={todo.id}
            className=" flex items-center border border-white mt-4 justify-between "
          >
            <h1 className="py-3 mr-72 px-8 text-xl text-black">{todo.title}</h1>

            <button
              className=" py-3 px-8  text-xl  bg-slate-700 text-white hover:bg-slate-400 "
              type="button"
              onClick={() => dispatch(deleteTodo({ id: todo.id }))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <p className="text-2xl text-white font-bold">
        Your Todos Item : {todos.length}
      </p>
    </div>
  );
};

export default Todos;
