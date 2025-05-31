import React from 'react';
import './TableComponent.css';

function TableComponent({ users, onDeleteUser }) {
  if (users.length === 0) {
    return <p className="no-users-message">No users to display. Add some using the form!</p>;
  }

  return (
    <div className="table-container">
      <h2>User Data</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>
                <button
                  onClick={() => onDeleteUser(user.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;