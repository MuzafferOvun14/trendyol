


import { Route } from 'react-router-dom';
import './App.css';
import standartMain from './standartPage/main';


function App() {
  return (
    <div className="App">
      <Route  path="/" component={standartMain}/>
    </div>
  );
}

export default App;
