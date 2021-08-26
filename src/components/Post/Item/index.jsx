import React, { useState } from 'react'
import CustomButton from '../../UI/CustomButton'

export default function Post ({ post, removePost }) {
  return (
    <section className='post'>
      <div className='post__content'>
        <strong>{post.title}</strong>
        <div>{post.description}</div>
      </div>
      <div className='post__btns'>
        <CustomButton onClick={() => removePost(post.id)}>Удалить</CustomButton>
      </div>
    </section>
  )
}
