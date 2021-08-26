import React, { useState } from 'react'
import CustomInputText from '../../UI/CustomInputText'
import CustomButton from '../../UI/CustomButton/index'
import classModule from './index.module.css'
export default function Create ({ addPost }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <section className={classModule['post__create-post']}>
      <CustomInputText value={title} valueChanged={value => setTitle(value)} />
      <CustomInputText
        value={description}
        valueChanged={value => setDescription(value)}
      />
      <CustomButton
        onClick={() => {
          addPost({ title, description })
          setTitle('')
          setDescription('')
        }}
        disabled={false}
      >
        Создать
      </CustomButton>
    </section>
  )
}
