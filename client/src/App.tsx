import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [test, setTest] = useState("");
  const [count, setCount] = useState("");
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then(setMessage);
  }, []);

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.text())
      .then(setTest);
  }, []);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const handleClick = () => {
    fetch("/api/count")
      .then((res) => res.text())
      .then(setCount);
  };

  const handleCreateUser = () => {
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((user) => {
        setUsers((prevUsers) => [...prevUsers, user]);
        setName("");
      });
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Nest.js + Vite + React</h1>
      <p>
        Server says: <strong>{message}</strong>
      </p>
      <p>
        Test says: <strong>{test}</strong>
      </p>
      <button onClick={handleClick}>{count}</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={handleCreateUser}>Create User</button>
      <h2>Users:</h2>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.id}: {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
