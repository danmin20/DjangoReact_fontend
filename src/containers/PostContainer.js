import React, { Component } from "react";
import { connect } from "react-redux";
import * as postActions from "../store/modules/post";
import Form from "../components/Form";

export class PostContainer extends Component {
  handleChange = ({ value }) => {
    const { changePostInput } = this.props;
    changePostInput({ value });
  };

  addPost = () => {
    const { addPost } = this.props;
    addPost();
  };

  render() {
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
