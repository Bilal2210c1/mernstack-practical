import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to hold form data
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState(''); // To handle any API errors
  const [successMessage, setSuccessMessage] = useState(''); // To show success message

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the backend
    const userData = {
      userName,
      userEmail,
      userPassword
    };

    try {
      // Make the API request to create the user
      const response = await fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      // Check if the response is okay (status code 200-299)
      if (response.ok) {
        const result = await response.json();
        setSuccessMessage('User registered successfully!');
        setUserName('');
        setUserEmail('');
        setUserPassword('');
      } else {
        const result = await response.json();
        setError(result.error || 'Something went wrong!');
      }
    } catch (err) {
      // Handle network errors
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div>
      {/* Form with input fields for user name, email, and password */}
      <div className="container mt-4">
        <h2>User Registration</h2>

        {/* Display success or error message */}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">User Email</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userPassword" className="form-label">User Password</label>
            <input
              type="password"
              className="form-control"
              id="userPassword"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
