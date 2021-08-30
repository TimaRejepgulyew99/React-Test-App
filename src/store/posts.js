import rematch from "@rematch/core";
import axios from "axios";
const dataApi = {
  post: "http://192.168.23.1:5000/posts",
};
export const posts = {
  state: [],
  reducers: {
    SET_POSTS(state, payload) {
      return payload;
    },
    CLEAR_POSTS(state, payload) {
      console.log(state);
      return state;
    },
  },
  effects: (dispatch) => ({
    async loadPosts(payload, rootState) {
      const { data } = await axios.get(dataApi.post);
      dispatch.posts.SET_POSTS(data);
    },
    async loadPostById(id, rootState) {
      const { data } = await axios.get(`${dataApi.post}/${id}`);
      return data;
    },
    async createPost(post) {
      await axios.post(`${dataApi.post}/create`, post);
      await dispatch.posts.loadPosts();
    },
    async deletePost(id) {
      const { data } = await axios.delete(`${dataApi.post}/${id}`);
      await dispatch.posts.loadPosts();
    },
    async updatePost(post) {
      const { data } = await axios.put(`${dataApi.post}/${post._id}`, post);
      return data;
    },
    clearPosts() {
      dispatch.posts.CLEAR_POSTS();
    },
  }),
};
