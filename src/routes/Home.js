import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div``;

class Home extends React.Component {
  state = {
    isLoading: true,
    posts: [],
  };
  getPosts = async () => {
    const { data: posts } = await axios.get("http://localhost:8000/api/");
    console.log(posts);
    this.setState({ posts, isLoading: false });
  };
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { isLoading, posts } = this.state;
    console.log(posts);

    return (
      <Container>
        {isLoading ? (
          <>loading</>
        ) : (
          <>
            {posts.map((post) => (
              <div>{post.title}</div>
            ))}
          </>
        )}
      </Container>
    );
  }
}

export default Home;
