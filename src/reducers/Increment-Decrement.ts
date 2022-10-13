const initialState=0;
  const changeValue = (state=initialState,action:any) =>{
switch(action.type)
{
  case 'Increment' : return state + 5;
  case 'Decrement' : return state -5;
  default: return state;
}
  }


export default changeValue