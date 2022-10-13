import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { incrNumber,decrNumber ,incrScoreNumber,decrScoreNumber} from '../actions'
const Counter = () => {
    const myState = useSelector((state:any)=>state.counter)
    const myStates = useSelector((state:any)=>state.scoreCard
    )
     
    const dispatch = useDispatch()
    const dispatchs = useDispatch()
  return (
   <div className="container">
<h1>Counter</h1>
<div className="quantity">
  <button className='btn btn-primary' onClick={()=>alert('hi')}>-</button>
  <input type="text" name='quantity' className='quantiy-input'  value={myState}/>
  <button className='btn btn-danger' onClick={()=>dispatch(incrNumber())}>+</button>

</div>
<h1>secondCounter</h1>
<div className="quantity">
  <button className='btn btn-primary' onClick={()=>dispatchs(decrScoreNumber())}>-</button>
  <input type="text" name='quantity' className='quantiy-input'  value={myStates}/>
  <button className='btn btn-danger' onClick={()=>dispatchs(incrScoreNumber())}>+</button>

</div>
   </div>
  )
}

export default Counter