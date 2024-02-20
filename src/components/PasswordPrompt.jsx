import React, { useState } from 'react';

const PasswordPrompt = ({ onPasswordSubmit }) => {
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onPasswordSubmit(passwordInput);
  };

  return (
    <div className="password-prompt">
      <form onSubmit={handleFormSubmit}>
        <h2>Please Enter Password to Enter Attendance Page</h2>
        <label>
          Password:
          <input
            type="password"
            value={passwordInput}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PasswordPrompt;
