import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc
} from "firebase/firestore";

const FirestoreTaskManager = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateTaskId, setUpdateTaskId] = useState(null);
  const [updateInput, setUpdateInput] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    // Clean up function
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called");
    if (input !== "") {
      try {
        const docRef = await addDoc(collection(db, "tasks"), {
          name: input,
          completed: false
        });
        console.log("Document written with ID: ", docRef.id);
        setInput("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const handleDelete = async (id) => {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
  };

  const handleUpdateClick = (taskId) => {
    setUpdateTaskId(taskId);
    setUpdateInput(tasks.find((task) => task.id === taskId).name);
  };

  const handleUpdateChange = (e) => {
    setUpdateInput(e.target.value);
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const taskRef = doc(db, "tasks", updateTaskId);
    await updateDoc(taskRef, { name: updateInput });
    setUpdateTaskId(null);
    setUpdateInput("");
  };
  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={handleChange}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleUpdateClick(task.id)}>Update</button>
          </li>
        ))}
      </ul>
      {updateTaskId && (
        <form onSubmit={handleUpdateSubmit}>
          <input
            type="text"
            placeholder="Update task"
            value={updateInput}
            onChange={handleUpdateChange}
          />
          <button type="submit">Submit Update</button>
        </form>
      )}
    </div>
  );
};

export default FirestoreTaskManager;
