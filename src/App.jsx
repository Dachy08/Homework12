import React, { useState, useEffect } from 'react';
import './App.css';
import FormComponent from './components/FormComponent'; // Uncommented
import TableComponent from './components/TableComponent'; // Uncommented

function App() {
  const [users, setUsers] = useState([]);

  // Load users from local storage on initial render
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Save users to local storage whenever the users state changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() % 10000 }; // Simple ID for example
    setUsers([...users, newUser]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div className="app-container">
      <h1>User Registration</h1>
      <FormComponent onAddUser={addUser} /> {/* Replaced placeholder */}
      <TableComponent users={users} onDeleteUser={deleteUser} /> {/* Replaced placeholder */}
    </div>
  );
}

export default App;