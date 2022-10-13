import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
const Counter = () => {
    const myState = useSelector((state:any)=>state.IncrementDecrement) 
  return (
   <div className="container">
<h1>Counter</h1>
<div className="quantity">
    <a className='quantity-decr'><span>-</span></a>
    <input type="text" name='quantity' className='quantiy-input' value='0' />
    <a className='quantity-incr'><span>+</span></a>
</div>

   </div>
  )
}

export default Counter