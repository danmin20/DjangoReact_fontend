import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = styled.div``;

const Title = styled.div``;

const Name = styled.input``;

const Password = styled.input``;

const AuthBtn = styled.div``;

export default ({
  kind,
  onChangeInput,
  username,
  password,
  onLogin,
  onRegister,
  error,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChangeInput({ name, value });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      switch (kind) {
        case "register":
          onRegister();
          return;
        case "login":
          onLogin();
          return;
        default:
          return;
      }
    }
  };
  return (
    <Form>
      <Title>
        <Name
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <Password
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        {kind === "register" ? (
          <AuthBtn onClick={onRegister}>{kind.toUpperCase()}</AuthBtn>
        ) : (
          <AuthBtn onClick={onLogin}>{kind.toUpperCase()}</AuthBtn>
        )}
        {kind === "register" ? (
          <Link to={`/auth/login`}>계정이 있으신가요?</Link>
        ) : (
          <Link to={`/auth/register`}>계정이 없으신가요?</Link>
        )}
      </Title>
    </Form>
  );
};
