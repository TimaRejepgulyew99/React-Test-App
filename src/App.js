import './App.css'
import React, { useState } from 'react'

// import Counter from './components/Counter/index'
// import ClassCounter from './components/Counter-class/index'
import PostList from './components/Post/index'
function App () {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'JavaScript',
      description: 'Javascript язык программирование'
    },
    {
      id: 2,
      title: 'Python',
      description: 'Python язык программирование'
    },
    {
      id: 3,
      title: 'Java',
      description: 'Java язык программирование'
    },
    {
      id: 4,
      title: 'C#',
      description: 'C# язык программирование'
    }
  ])
  const addPost = post => {
    setPosts([...posts, { ...post, id: posts.length }])
  }

  return (
    <div className='App'>
      <PostList
        addPost={addPost}
        posts={posts}
        title={'Post about programming'}
      ></PostList>
    </div>
  )
}

export default App
