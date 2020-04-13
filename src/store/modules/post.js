const CHANGE_POST_INPUT = "posts/CHANGE_POST_INPUT";

export const changePostInput = ({ value }) => ({
  type: CHANGE_POST_INPUT,
  payload: { value },
});

const initialState = {
  postInput: "",
};

export const post = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST_INPUT:
      return {
        ...state,
        postInput: action.payload.value,
      };
    default:
      return state;
  }
};
