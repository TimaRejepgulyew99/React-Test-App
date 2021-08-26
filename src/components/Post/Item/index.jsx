import React, { useState } from 'react'
import CustomButton from '../../UI/CustomButton'

export default function Post ({ post }) {
  return (
    <section className='post'>
      <div className='post__content'>
        <strong>{post.title}</strong>
        <div>{post.description}</div>
      </div>
      <div className='post__btns'>
        <CustomButton>Удалить</CustomButton>
      </div>
    </section>
  )
}
