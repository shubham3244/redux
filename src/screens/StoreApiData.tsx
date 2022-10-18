import React,{useEffect} from 'react'
import { incrNumber } from '../actions'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const StoreApiData = () => {
const dispatch = useDispatch()
    const getData = async() =>{
        const res=   await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        dispatch(incrNumber(res));
    }
  
useEffect(()=>{
    getData();
},[])
  return (
    <div>
        <button onClick={getData}>getData</button>
    </div>
  )
}

export default StoreApiData