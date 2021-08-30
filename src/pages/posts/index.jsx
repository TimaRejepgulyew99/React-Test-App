import React, { useState, useMemo, useEffect } from "react";
import PostList from "../../components/Post/index";
import "redux";
import { connect } from "react-redux";
function PostPage({ posts: { posts }, loadPosts, clearPosts, createPost }) {
  useEffect(async () => {
    await loadPosts();
    return clearPosts();
  }, []);
  const [sortValue, setSortValue] = useState("title");
  const [filter, setFilter] = useState("");
  const sortedPost = useMemo(() => {
    let res = [...posts];
    if (filter) {
      res = res.filter((el) => el[sortValue].includes(filter));
    }
    return res.sort((a, b) => a[sortValue].localeCompare(b[sortValue]));
  }, [sortValue, filter, posts]);

  const sortPost = (sortBy) => {
    setSortValue(sortBy);
  };
  const filterChanged = (value) => {
    setFilter(value);
  };
  const addPost = (post) => {
    createPost(post);
  };
  const removePost = (postId) => {
    // setPosts(posts.filter((post) => post.id !== postId));
  };
  return (
    <div>
      <PostList
        filter={filter}
        filterChanged={filterChanged}
        sortValue={sortValue}
        sort={sortPost}
        removePost={removePost}
        addPost={addPost}
        posts={sortedPost}
        title={"Post about programming"}
      ></PostList>
    </div>
  );
}
const mapStateProps = (state) => ({
  posts: state,
});
const mapDispatchProps = (dispatch) => ({
  createPost: dispatch.posts.createPost,
  loadPosts: dispatch.posts.loadPosts,
  clearPosts: dispatch.posts.clearPosts,
});

export default connect(mapStateProps, mapDispatchProps)(PostPage);
