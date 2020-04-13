import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import * as postActions from "../store/modules/post";
import Form from "../components/Form";
import Post from "../components/Post";

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

export class PostContainer extends Component {
  state = {
    isLoading: true,
    posts: [],
  };
  getPosts = async () => {
    const { data: posts } = await axios.get("http://localhost:8000/api/posts/");
    console.log(posts);
    this.setState({ posts, isLoading: false });
  };
  componentDidMount() {
    this.getPosts();
  }
  handleChange = ({ value }) => {
    const { changePostInput } = this.props;
    changePostInput({ value });
  };
  addPost = () => {
    const { addPost } = this.props;
    addPost();
    this.getPosts();
  };

  render() {
    const { isLoading, posts } = this.state;
    console.log(posts);
    const { postInput } = this.props;
    const { handleChange, addPost } = this;
    console.log(postInput);
    return (
      <div>
        <Form
          postInput={postInput}
          onChangeInput={handleChange}
          onAdd={addPost}
        />
        <Cards>
          {!isLoading &&
            posts &&
            posts.map((post) => <Post key={post.id} text={post.text} />)}
        </Cards>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postInput: state.post.postInput,
  posts: state.post.post,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePostInput: ({ value }) => {
      dispatch(postActions.changePostInput({ value }));
    },
    addPost: () => {
      dispatch(postActions.addPost());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
