import { Route } from 'react-router-dom';
import './App.css';
import CenteredGrid from './pages/newLoginForm';
import standartMain from './standartPage/main';
function App() {
  return (
    <div className="App">
      <Route   path="/" component={standartMain}/>
      <Route  path="/login/" component={CenteredGrid}/>
    </div>
  );
}
export default App;
