import React, { useReducer } from "react";
import axios from "axios";
import Context from "./Context";
import Reduser from "./Reduser";
import {
  _BASE_URL,
  _BASE_IMAGE_URL,
  _CREATE_POST,
  _GET_POSTS,
  _GET_POST,
  _GUEST_BYID,
  _GUEST_INVITE,
  _GET_COMMENT,
  _GET_USER,
  _GET_CATEGORIES,
  _GET_VIDEOS,
  _GET_TAGS
} from "../../ApiUrls";

import {
  GET_ALL_POST,
  GET_POST,
  ADD_POST,
  GET_COMMENT,
  GET_USER,
  GET_CATEGORIES,
  GUEST_BYID,
  GET_UPCOMING_GUEST,
  ERROR,
  GET_VIDEOS,
  GET_TAGS
} from "../Types";

const State = (props) => {
  const initialState = {
    posts: [],
    post: null,
    guest: null,
    invite: null,
    error: null,
    comment: [],
    users: [],
    categories: [],
    videos: [],
    tags: []
  };

  const [state, dispatch] = useReducer(Reduser, initialState);

    const getPosts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(_BASE_URL + _GET_POSTS, config);
      res.data.blogs = res.data.blogs.map(blog=>{
        if (blog.imageUrl?.includes('http')) {
          return blog;
        } else {
          return {
            ...blog,
            imageUrl: _BASE_IMAGE_URL + blog.imageUrl
          }
        }
      });
      res.data.blogs = res.data.blogs.filter(blog=>{
        if(blog.title){
          return blog
        } 
      })
      dispatch({ type: GET_ALL_POST, payload: res.data.blogs });
    } catch (err) {
      console.log(err);
    }
  };

  const getVideos = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(_BASE_URL + _GET_VIDEOS, config);
      dispatch({ type: GET_VIDEOS, payload: res.data.videos });
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(_BASE_URL + _GET_USER, config);
      dispatch({ type: GET_USER, payload: res.data.users });
    } catch (err) {
      console.log(err);
    }
  };

  const addPost = async (post) => {
    try {
      const res = await axios.post(_BASE_URL + _CREATE_POST, post);
      // if (res.data.status === false) alert(res.data.message);
      dispatch({ type: ADD_POST, payload: res.data.blog });
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    try {
      axios
      .get(_BASE_URL +_GET_CATEGORIES )
      .then((res) => {
        dispatch({ type: GET_CATEGORIES, payload: res.data.categories });
      })
      // .catch((err) => console.log(err));
      // const res = await axios.get(_BASE_URL + _GET_CATEGORIES, config);
      // // if (res.data.status === false) alert(res.data.message);
      // dispatch({ type: GET_CATEGORIES, payload: res.data.categories });
    } catch (err) {
      console.log(err);
    }
  };

  const getTags = async () => {
    try {
      axios
      .get(_BASE_URL +_GET_TAGS )
      .then((res) => {
        dispatch({ type: GET_TAGS, payload: res.data.tags });
      })
      // .catch((err) => console.log(err));
      // const res = await axios.get(_BASE_URL + _GET_CATEGORIES, config);
      // // if (res.data.status === false) alert(res.data.message);
      // dispatch({ type: GET_CATEGORIES, payload: res.data.categories });
    } catch (err) {
      console.log(err);
    }
  };

  const getPost = async (id) => {
    try {
      axios
        .get(_BASE_URL + _GET_POST + id)
        .then((res) => {
          dispatch({ type: GET_POST, payload: res.data.blog });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const getComment = async (id) => {
    try {
      axios
        .get(_BASE_URL + _GET_COMMENT + id)
        .then((res) => {
          dispatch({ type: GET_COMMENT, payload: res.data.comment });
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Context.Provider
      value={{
        posts: state.posts,
        post: state.post,
        guest: state.guest,
        invite: state.invite,
        error: state.error,
        comment: state.comment,
        users: state.users,
        categories : state.categories,
        videos: state.videos,
        tags: state.tags,
        getPosts,
        getPost,
        addPost,
        getComment,
        getUsers,
        getCategories,
        getVideos,
        getTags
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
