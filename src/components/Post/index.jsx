import React, { useState } from 'react'
import PostItem from './Item/index'
import PostHeader from './Header/index'
import CreatePost from './Create/index'
export default function Post ({ posts, title, addPost, removePost }) {
  return (
    <div className={'post-list'}>
      <CreatePost addPost={addPost} />
      <PostHeader title={title} />
      {posts.length !== 0 ? (
        posts.map(post => <PostItem removePost={removePost} post={post} />)
      ) : (
        <div>Посты не найдены</div>
      )}
    </div>
  )
}
