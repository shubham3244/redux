import PersistentDrawerLeft from './component/Drawer';
import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import IncrementDecrement from './reducers/Increment-Decrement';
import Counters from './screens/Counters';
// import Counter from './screens/Counter';
import StoreApiData from './screens/StoreApiData';
import ReduxLoaders from './screens/ReduxLoaders';
function App() {
 
  return (
    <div className="App">
     {/* < PersistentDrawerLeft/> */}
<Counters/>
<StoreApiData/>
<ReduxLoaders/>
    </div>
  );
}

export default App;
