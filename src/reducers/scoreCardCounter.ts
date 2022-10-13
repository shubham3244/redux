const initialState=0;
  const changeScoreValue = (state=initialState,action:any) =>{
switch(action.type)
{
  case 'Increment' : return state + 2;
  case 'Decrement' : return state -2;
  default: return state;
}
  }


export default changeScoreValue