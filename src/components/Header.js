import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.div``;
const Logout = styled.div`
  cursor: pointer;
`;

export default ({ onLogout }) => {
  return (
    <Header>
      <Link to={"/"}>Note</Link>
      <Logout onClick={onLogout}>logout</Logout>
    </Header>
  );
};
