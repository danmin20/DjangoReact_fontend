import { post, postsEpics } from "./post";
import { auth, authEpics } from "./auth";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ post, auth });
export const rootEpics = combineEpics(
  postsEpics.addPostEpic,
  //   postsEpics.getPostsEpic,
  //   postsEpics.updatePostEpic,
  //   postsEpics.deletePostEpic,
  authEpics.loginEpic,
  authEpics.registerEpic
);
