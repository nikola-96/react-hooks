import React from 'react';
import './App.css';
import DataFetchingOne from './fetchigDataReduce/DataFetchingOne';
import DataFetchingTwo from './fetchigDataReduce/DataFetchingTwo';
import ParentComponent from './components/Callback/ParentComponent';




function App() {
  return (
    <div className="App">
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingTwo /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
