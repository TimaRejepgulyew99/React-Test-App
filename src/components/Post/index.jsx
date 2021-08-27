import React from "react";
import PostItem from "./Item/index";
import PostHeader from "./Header/index";
import CreatePost from "./Create/index";
import FilterFacade from "./FilterFacade";
export default function Post({
  posts,
  title,
  addPost,
  removePost,
  sort,
  sortValue,
  filter,
  filterChanged,
}) {
  return (
    <div className={"post-list"}>
      <CreatePost addPost={addPost} />
      <PostHeader title={title} />
      <FilterFacade
        filter={filter}
        filterChanged={filterChanged}
        sort={sort}
        sortValue={sortValue}
      />
      {posts.length !== 0 ? (
        posts.map((post) => (
          <PostItem key={post.id} removePost={removePost} post={post} />
        ))
      ) : (
        <div>Посты не найдены</div>
      )}
    </div>
  );
}
