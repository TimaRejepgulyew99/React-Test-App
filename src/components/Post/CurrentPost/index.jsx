import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import CustomButton from "../../UI/CustomButton";
import CustomDialog from "../../UI/CustomDialog";
import UpdatePost from "../Update/index";
const CurrentPost = ({ updatePost, loadPostById }) => {
  const params = useParams();
  const [post, setPost] = useState({ title: "", description: "" });
  const [swichedDialog, toggleDialog] = useState(false);
  useEffect(async () => {
    const res = await loadPostById(params.id);
    setPost(res);
  }, []);
  return (
    <div className="post">
      <CustomDialog
        swiched={swichedDialog}
        toogle={() => {
          toggleDialog(!swichedDialog);
        }}
      >
        <UpdatePost
          post={post}
          updatePost={async (post) => {
            const res = await updatePost(post);
            setPost(res);
            toggleDialog(!swichedDialog);
          }}
        ></UpdatePost>
      </CustomDialog>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <CustomButton onClick={() => toggleDialog(!swichedDialog)}>
        Изменить
      </CustomButton>
    </div>
  );
};
const mapDispatchProps = (dispatch) => ({
  updatePost: dispatch.posts.updatePost,
  loadPostById: dispatch.posts.loadPostById,
});
export default connect(null, mapDispatchProps)(CurrentPost);
