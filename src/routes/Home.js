import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import PostContainer from "../containers/PostContainer";

const Container = styled.div`
  position: absolute;
  background-color: #403d3b;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 500px;
  align-items: center;
  flex-direction: column;
`;

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <PostContainer />
      </Container>
    );
  }
}

export default Home;
