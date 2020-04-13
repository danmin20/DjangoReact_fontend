import React from "react";

export default ({ postInput, onChangeInput, onAdd }) => {
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
    <div>
      <input
        type="text"
        name="post"
        value={postInput}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
