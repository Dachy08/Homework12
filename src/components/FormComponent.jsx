import React, { useState } from 'react';
import './FormComponent.css';

function FormComponent({ onAddUser }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !age) {
      alert('Please fill in all fields.');
      return;
    }
    if (isNaN(age) || Number(age) <= 0) {
      alert('Please enter a valid age.');
      return;
    }
    onAddUser({ firstName, lastName, age: Number(age) });
    setFirstName('');
    setLastName('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h2>Enter your full name and age.</h2>
      <div className="form-group">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="save-button">Save</button>
    </form>
  );
}

export default FormComponent;