import React, { useState } from "react";
import PostItem from "./Item/index";
import PostHeader from "./Header/index";
import CreatePost from "./Create/index";
import FilterFacade from "./FilterFacade";
import CustomDialog from "../UI/CustomDialog";
import CustomButton from "../UI/CustomButton";

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
  const [swichedDialog, toggleDialog] = useState(false);
  const createdPost = (post) => {
    addPost(post);
    toggleDialog(!swichedDialog);
  };
  return (
    <div className={"post-list"}>
      <CustomDialog
        swiched={swichedDialog}
        toogle={() => {
          toggleDialog(!swichedDialog);
        }}
      >
        <CreatePost addPost={createdPost} />
      </CustomDialog>
      <CustomButton
        onClick={() => {
          toggleDialog(!swichedDialog);
        }}
      >
        Создать пост
      </CustomButton>
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
