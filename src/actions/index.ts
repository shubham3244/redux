export const incrNumber = (product:any)=>{
// console.log(product.data);]

return {
  type:'Increment',
  payload:{product}
}
}
export const decrNumber = ()=>{
  return {
    type:'Decrement'
  }
  }
  export const incrScoreNumber = ()=>{

    return {
      type:'Increments'
    }
    }
    export const decrScoreNumber = ()=>{
      return {
        type:'Decrements'
      }
      }