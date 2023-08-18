import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const dataSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Login">
      <form onSubmit={dataSubmit}>
        <h1>로그인 화면</h1>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          placeholder="password"
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Login;
