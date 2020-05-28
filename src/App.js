import React from 'react';
import './App.css';
// import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterTheree from './components/HookCounterTheree';

function App() {
  return (
    <div className="App">
      {/* <HookCounter /> */}
      <HookCounterTwo />
      <HookCounterTheree />
    </div>
  );
}

export default App;
