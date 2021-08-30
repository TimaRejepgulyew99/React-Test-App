import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classModule from "./index.module.css";
import CustomInputText from "../../UI/CustomInputText";
import CustomButton from "../../UI/CustomButton";

const UpdatePost = ({ post, updatePost }) => {
  const [title, setTitle] = useState(post?.title);
  const [description, setDescription] = useState(post?.description);
  useEffect(() => {
    setTitle(post?.title);
    setDescription(post?.description);
  }, [post]);
  return (
    <section className={classModule["post__update-post"]}>
      <CustomInputText
        value={title}
        valueChanged={(value) => setTitle(value)}
      />
      <CustomInputText
        value={description}
        valueChanged={(value) => setDescription(value)}
      />
      <CustomButton
        onClick={async () => {
          await updatePost({ title, description, _id: post._id });
        }}
        disabled={!title || !description}
      >
        Сохранить
      </CustomButton>
    </section>
  );
};
UpdatePost.propTypes = {
  post: PropTypes.object.isRequired,
};
export default UpdatePost;
