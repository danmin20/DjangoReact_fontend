import React from "react";

export default ({ postInput, onChangeInput }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChangeInput({ value });
    console.log(e);
  };
  return (
    <div>
      <input
        type="text"
        name="post"
        value={postInput}
        onChange={handleChange}
      />
    </div>
  );
};
