import React, { useState, useMemo } from "react";
import PostList from "../../components/Post/index";
function PostPage() {
  const [sortValue, setSortValue] = useState("title");
  const [filter, setFilter] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "Javascript язык программирование",
    },
    {
      id: 2,
      title: "Python",
      description: "Python язык программирование",
    },
    {
      id: 3,
      title: "Java",
      description: "Java язык программирование",
    },
    {
      id: 4,
      title: "C#",
      description: "C# язык программирование",
    },
  ]);
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
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };
  const removePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };
  return (
    <div className="App">
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

export default PostPage;
