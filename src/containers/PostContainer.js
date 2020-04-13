import React, { Component } from "react";
import { connect } from "react-redux";
import * as postActions from "../store/modules/post";
import Form from "../components/Form";

export class PostContainer extends Component {
  handleChange = ({ value }) => {
    const { changePostInput } = this.props;
    changePostInput({ value });
  };

  render() {
    const { postInput } = this.props;
    const { handleChange } = this;
    console.log(postInput);
    return (
      <div>
        <Form postInput={postInput} onChangeInput={handleChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  postInput: state.post.postInput,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changePostInput: ({ value }) => {
      dispatch(postActions.changePostInput({ value }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
