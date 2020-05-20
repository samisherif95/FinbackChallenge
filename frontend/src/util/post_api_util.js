import axios from 'axios';

export const getPosts = () => {
  return axios.get('/api/posts')
};

export const writePost = data => {
  return axios.post('/api/posts/', data)
}

export const deletePost = post => {
  return axios.delete(`/api/posts/${post._id}`)
}

export const updateLikes = post =>{
   return axios.put(`/api/posts/${post._id}`)
}