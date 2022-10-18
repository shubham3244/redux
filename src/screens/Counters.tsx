import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { incrNumber,decrNumber ,incrScoreNumber,decrScoreNumber} from '../actions'
const Counter = () => {
    const myState = useSelector((state:any)=>state)
  
    console.log(myState.counter.type);
    
     
    const dispatch = useDispatch()
  
  return (
   <div className="container">
<h1>Counter</h1>
<div className="quantity">
  <button className='btn btn-primary' onClick={()=>dispatch(decrNumber())}>-</button>
  <input type="text" name='quantity' className='quantiy-input'  value={myState.counter}/>
  {/* <button className='btn btn-danger' onClick={()=>dispatch()}>+</button> */}

</div>
<h1>secondCounter</h1>
<div className="quantity">
  <button className='btn btn-primary' onClick={()=>dispatch(decrScoreNumber())}>-</button>
  <input type="text" name='quantity' className='quantiy-input'  value={myState.scoreCard}/>
  <button className='btn btn-danger' onClick={()=>dispatch(incrScoreNumber())}>+</button>

</div>
   </div>
  )
}

export default Counter