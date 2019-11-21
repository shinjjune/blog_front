/* eslint-disable */
import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { baseURL } from "../common/config";

export default function Login({ setIsLoggedIn, setIsAdmin, history }) {
  const [loginState, setLoginState] = useState("init");
  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await Axios.post(`${baseURL}/stamp/login`, {
      id: e.target.id.value,
      password: e.target.password.value
    });
    if (!data.result) {
      setLoginState("failed");
    } else {
      const { exp } = JSON.parse(
        atob(data.token.split(".")[1]) // base64 decoding
      );
      const expires = new Date(exp * 1000).toUTCString();
      document.cookie = `Authorization=JWT ${data.token};expires=${expires}`;
      setIsAdmin(data.admin);
      setIsLoggedIn(true);
      setLoginState("success");
    }
  };
  return (
    <>
      {loginState === "success" ? <Redirect to="/" /> : null}
      <form onSubmit={handleSubmit}>
        <small>
          {loginState === "failed" && "이메일 혹은 비밀번호를 확인하세요"}
        </small>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <input
            type="id"
            className="form-control"
            id="id"
            name="id"
            // aria-describedby="emailHelp"
            placeholder="Enter ID"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => history.push("/join")}
        >
          회원가입
        </button>
      </form>
    </>
  );
}
