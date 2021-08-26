import React, { useState } from 'react'
import PostItem from './Item/index'
import PostHeader from './Header/index'
import CreatePost from './Create/index'
export default function Post ({ posts, title, addPost }) {
  return (
    <div className={'post-list'}>
      <CreatePost addPost={addPost} />
      <PostHeader title={title} />
      {posts.map(post => (
        <PostItem post={post} />
      ))}
    </div>
  )
}
