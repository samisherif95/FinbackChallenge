import { getPosts, writePost, deletePost, updateLikes } from '../util/post_api_util';

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_NEW_POST = "RECEIVE_NEW_POST";
export const DELETE_POST = "DELETE_POST";
export const INCREMENT_LIKES = "INCREMENT_LIKES";


const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

const receiveNewPost = post => ({
    type: RECEIVE_NEW_POST,
    post
});

const removePostById = post => ({
    type: DELETE_POST,
    post
});

const incLikesById = post => ({
    type: INCREMENT_LIKES,
    post
});

export const incrementLikes = post => dispatch => (
    updateLikes(post)
        .then( (post) => dispatch(incLikesById(post)))
        .catch( err => console.log(err))
)

export const removePost = post => dispatch => (
    deletePost(post)
        .then( (post) => dispatch(removePostById(post)))
        .catch( err => console.log(err))
)

export const fetchPosts = () => dispatch => (
    getPosts()
        .then(posts => dispatch(receivePosts(posts)))
        .catch(err => console.log(err))
);

export const composePost = data => dispatch => (
  writePost(data)
    .then(post => dispatch(receiveNewPost(post)))
    .catch(err => console.log(err))
);