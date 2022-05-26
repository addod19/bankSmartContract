import './App.css';

import abi from './contracts/bank.json';



function App() {
  console.log(abi.abi);
  return (
    <div className="app">
     <h1>Upload your music</h1>
    </div>
  );
}

export default App;
