import React, { useState } from "react";
import { connect } from "react-redux";
import PostItem from "./Item/index";
import PostHeader from "./Header/index";
import CreatePost from "./Create/index";
import FilterFacade from "./FilterFacade";
import CustomDialog from "../UI/CustomDialog";
import CustomButton from "../UI/CustomButton";
import { useHistory } from "react-router";
function Post({
  posts,
  title,
  sort,
  sortValue,
  filter,
  filterChanged,
  deletePost,
  createPost,
}) {
  const router = useHistory();
  const [swichedDialog, toggleDialog] = useState(false);

  const goTo = (id) => {
    router.push(`/posts/${id}`);
  };
  const addPost = async (post) => {
    await createPost(post);
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
        <CreatePost addPost={addPost} />
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
          <PostItem
            key={post._id}
            goTo={goTo}
            removePost={() => deletePost(post._id)}
            post={post}
          />
        ))
      ) : (
        <div>Посты не найдены</div>
      )}
    </div>
  );
}
const mapDispatchProps = (dispatch) => ({
  deletePost: dispatch.posts.deletePost,
  createPost: dispatch.posts.createPost,
});

export default connect(null, mapDispatchProps)(Post);
