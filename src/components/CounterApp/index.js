import { useState } from 'react'
import { store } from '../../Store'
import './index.css'

const CounterApp = () => {
  const [count, setCount] = useState(0);

  document.title = `Score ${0}`
  console.log(store.getState());
  return (
    <div className='counter-app'>
      <div className='counter-container'>
        <span className='count'>{count}</span>
        <button type='button' onClick={() => setCount(count + 1)}
          className='plus-button'
        >Increase</button>
        <button type='button' onClick={() => setCount(count - 1)}
          className='minus-button'
        >Decrease</button>
      </div>
    </div>
  )
}

export default CounterApp