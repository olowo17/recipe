import React from "react";

const Form = ({username, setUsername, password, setPassword, label, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <h2> {label}</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
