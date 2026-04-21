import React, { useState, useEffect } from "react";

const App = () => {
 
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      alert("Write tasks");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-6">
     
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <h1 className="text-5xl font-bold">Todo</h1>

        <div className="flex gap-5">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add new task"
            className="bg-blue-500 w-64 h-10 rounded-xl px-4 text-white placeholder-white"
          />

          <button
            type="submit"
            className="px-4 bg-blue-300 rounded-xl text-xl cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>


      <div className="mt-10">
        <h2 className="text-4xl font-semibold mb-6 underline">Tasks</h2>

        <ul className="flex flex-wrap gap-5">
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between gap-10 bg-gray-100 px-6 py-4 rounded-xl min-w-[250px]"
            >
              <span>{t}</span>

              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 rounded-xl font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
