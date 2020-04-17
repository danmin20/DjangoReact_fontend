import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 15px;
  width: 200px;
  border: 0px;
  padding: 7px 10px;
  border-radius: 20px;
  :focus {
    outline: none;
  }
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  :hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

const Err = styled.div`
  color: #fff5eb;
  font-family: "Song Myung", serif;
  margin-left: 10px;
`;

export default ({ postInput, onChangeInput, onAdd, error }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChangeInput({ value });
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };
  return (
    <>
      <Err>{error.triggered && <div>{error.message}</div>}</Err>
      <Input
        type="text"
        name="post"
        value={postInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </>
  );
};
