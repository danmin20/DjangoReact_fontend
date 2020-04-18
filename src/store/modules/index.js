import { post, postsEpics } from "./post";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

export const rootReducers = combineReducers({ post });
export const rootEpics = combineEpics(
  postsEpics.addPostEpic
);
