import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const ADD_POST = "ADD_POST";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";



export const getPosts = (num) => {
    return (dispatch) => {
      return axios
        .get(`${process.env.REACT_APP_API_URL}api/post/`)
        .then((res) => {
          const array = res.data.slice(0, num);
          dispatch({ type: GET_POSTS, payload: array });
          dispatch({ type: GET_ALL_POSTS, payload: res.data });
        })
        .catch((err) => console.log(err));
    };
  };

  export const addPost = (data) => {
    return (dispatch) => {
      return axios
        .post(`${process.env.REACT_APP_API_URL}api/post/`, data)
    };
  };

  export const likePost = (postId, userId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/post/like-post/` + postId,
        data: { id: userId },
      })
        .then((res) => {
          dispatch({ type: LIKE_POST, payload: { postId, userId } });
        })
        .catch((err) => console.log(err));
    };
  };
  
  export const unlikePost = (postId, userId) => {
    return (dispatch) => {
      return axios({
        method: "patch",
        url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` + postId,
        data: { id: userId },
      })
        .then((res) => {
          dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
        })
        .catch((err) => console.log(err));
    };
  };
  export const updatePost = (postId, message) => {
    return (dispatch) => {
      return axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
        data: { message },
      })
        .then((res) => {
          dispatch({ type: UPDATE_POST, payload: { message, postId } });
        })
        .catch((err) => console.log(err));
    };
  };
  
  export const deletePost = (postId) => {
    return (dispatch) => {
      return axios({
        method: "delete",
        url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
      })
        .then((res) => {
          dispatch({ type: DELETE_POST, payload: { postId } });
        })
        .catch((err) => console.log(err));
    };
  };