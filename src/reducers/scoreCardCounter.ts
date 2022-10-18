const initialState=5;
  const changeScoreValue = (state=initialState,action:any) =>{
switch(action.type)
{
  case 'Increments' : return state + 2;
  case 'Decrements' : return state -2;
  default: return state;
}
  }


export default changeScoreValue