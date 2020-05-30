import React from 'react';
import './App.css';
import MouseContainer from './components/MouseContainer';
import DataFetching from './components/DataFetching';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterTheree from './components/HookCounterTheree';
// import HookMouse from './components/HookMouse';
// import HookEffect from './components/HookEffect';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HookCounterTwo />
      <HookCounterTheree /> */}
      {/* <HookEffect /> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer /> */}
      <DataFetching />
    </div>
  );
}

export default App;
