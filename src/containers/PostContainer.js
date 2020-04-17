import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { connect } from "react-redux";
import * as postActions from "../store/modules/post";
import Form from "../components/Form";

const List = styled.div`
  margin-top: 30px;
  padding: 10px 0;
  border-radius: 20px;
  background-color: #fff5eb;
`;

const Txt = styled.div`
  margin-right: 10px;
  font-family: "Song Myung", serif;
  font-size: 20px;
  margin: 5px 0;
`;

const Count = styled.span`
  margin-right: 15px;
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
    const { postInput, error } = this.props;
    const { handleChange, addPost } = this;
    return (
      <div>
        <Form
          postInput={postInput}
          onChangeInput={handleChange}
          onAdd={addPost}
          error={error}
        />
        <List>
          <ul>
            {!isLoading &&
              posts &&
              posts.map((post) => (
                <Txt key={post.id}>
                  <Count>•</Count>
                  {post.text}
                </Txt>
              ))}
          </ul>
        </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postInput: state.post.postInput,
  posts: state.post.post,
  error: state.post.error
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
