import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  height: 100px;
  width: 800px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.span`
  margin-left: 50px;
`;
const Content = styled.span`
  margin-left: 100px;
`;

export default ({ id, title, content }) => (
  <Card>
    <Title>{title}</Title>
    <Content>{content}</Content>
  </Card>
);
