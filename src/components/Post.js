import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  height: 100px;
  width: 100px;
  margin: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default ({ text }) => <Card>{text}</Card>;
