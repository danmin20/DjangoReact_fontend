import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 100px 0;
  font-family: "Song Myung", serif;
  color: #FFF5EB;
`;

const Title = styled.div`
  font-size: 70px;
  text-align: center;
  flex: 1;
  font-style: oblique;
`;

const Logout = styled.div`
  cursor: pointer;
  flex: 1;
`;

const Blank = styled.div`
  flex: 1;
`;

export default ({ onLogout }) => {
  return (
    <Header>
      <Blank></Blank>
      <Title>빡 - 공</Title>
      <Logout onClick={onLogout}>logout</Logout>
    </Header>
  );
};
