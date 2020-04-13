import React from "react";
import axios from "axios";
import styled from "styled-components";
import Post from "../components/Post";
import Header from "../components/Header";
import PostContainer from "../containers/PostContainer";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
