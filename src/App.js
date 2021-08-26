import './App.css'
import Counter from './components/Counter/index'
import ClassCounter from './components/Counter-class/index'

function App () {
  return (
    <div className='App'>
      <Counter />
      <ClassCounter />
    </div>
  )
}

export default App
