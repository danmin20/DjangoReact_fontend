import { of } from "rxjs";
import { ajax } from "rxjs/observable/dom/ajax";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from "redux-observable";

const CHANGE_POST_INPUT = "posts/CHANGE_POST_INPUT";
const ADD_POST = "posts/ADD_POST";
const ADD_POST_SUCCESS = "posts/ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "posts/ADD_POST_FAILURE";

export const changePostInput = ({ value }) => ({
  type: CHANGE_POST_INPUT,
  payload: { value },
});
export const addPost = () => ({
  type: ADD_POST,
});
export const addPostSuccess = (post) => ({
  type: ADD_POST_SUCCESS,
  payload: {
    post,
  },
});
export const addPostFailure = (error) => ({
  type: ADD_POST_FAILURE,
  payload: {
    error,
  },
});

const addPostEpic = (action$, state$) => {
  return action$.pipe(
    ofType(ADD_POST),
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return ajax
        .post(`http://localhost:8000/api/posts/`, {
          text: state.post.postInput,
        })
        .pipe(
          map((response) => {
            const post = response.response;
            return addPostSuccess(post);
          }),
          catchError((error) =>
            of({
              type: ADD_POST_FAILURE,
              payload: error,
              error: true,
            })
          )
        );
    })
  );
};

const initialState = {
  postInput: "",
  posts: [],
  error: {
    triggered: false,
    message: "",
  },
};

export const post = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST_INPUT:
      return {
        ...state,
        postInput: action.payload.value,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        post: [post].concat(state.post),
        postInput: "",
        error: {
          triggered: false,
          message: "",
        },
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        error: {
          triggered: true,
          message: "내용을 입력해주세요",
        },
      };
    default:
      return state;
  }
};

export const postsEpics = {
  addPostEpic,
};
