import React from "react";
import axios from "axios";
import styled from "styled-components";
import Post from "../components/Post";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
              />
            ))}
          </>
        )}
      </Container>
    );
  }
}

export default Home;
