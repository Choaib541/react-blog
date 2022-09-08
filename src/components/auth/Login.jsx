import React from "react";
import { useState } from "react";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { login } from "../../store/features/UserSlice";
import { store } from "../../store/features/NotificationSlice";

const Login = () => {
  /*______________ Hooks ______________*/
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: null,
    password: null,
  });

  const [loginResponse, setLoginResponse] = useState({
    status: false,
    errors: {
      email: [],
      password: [],
    },
  });
  /*______________ Functions ______________*/
  const submit = (e) => {
    e.preventDefault();
    async function fetch_auth() {
      try {
        const response = await api({
          method: "post",
          url: "/auth",
          data: data,
        });
        setLoginResponse({
          ...loginResponse,
          status: true,
          errors: { email: [], password: [] },
        });
        setTimeout(() => {
          dispatch(
            store({
              status: "success",
              message: "You logged in successfully",
            })
          );
          dispatch(login(response.data));
        }, [1500]);
      } catch (err) {
        let loginResponse_copy = { ...loginResponse };
        loginResponse_copy.errors.email = err.response.data.errors.email ?? [];
        loginResponse_copy.errors.password =
          err.response.data.errors.password ?? [];
        setLoginResponse(loginResponse_copy);
      }
    }
    fetch_auth();
  };

  const handle_email = (e) => setData({ ...data, email: e.target.value });
  const handle_password = (e) => setData({ ...data, password: e.target.value });
  const handle_submit = (e) => submit(e);
  /*______________ Jsx ______________*/
  return (
    <form onSubmit={handle_submit} className="flex flex-col">
      <h2 className="text-xl font-semibold">LOGIN</h2>
      <input
        onChange={handle_email}
        className="input-control mt-2"
        type="text"
        placeholder="Email Address..."
      />
      <ul>
        {loginResponse.errors.email.map((e) => (
          <li key={e} className="text-danger text-sm my-2">
            {e}
          </li>
        ))}
      </ul>
      <input
        onChange={handle_password}
        className="input-control mt-2"
        type="password"
        placeholder="Password..."
      />
      <ul>
        {loginResponse.errors.password.map((e) => (
          <li key={e} className="text-danger text-sm my-2">
            {e}
          </li>
        ))}
      </ul>
      <button
        className={`disabled:opacity-75 btn bg-${
          !loginResponse.status ? "primary" : "success"
        } mt-2`}
        disabled={loginResponse.status}
      >
        {!loginResponse.status ? "Login" : "Welcome"}
      </button>
    </form>
  );
};

export default Login;
