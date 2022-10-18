const initialState={
  products:[]
}
const posts ={}
  const changeValue = (state=initialState,action:any) =>{
    console.log(action?.payload);
    
switch(action.type)
{
  case 'Increment' : return {products:action};
  case 'Decrement' : return {state}
  default: return state;
}
  }


export default changeValue