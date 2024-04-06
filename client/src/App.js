import logo from './logo.svg';
import './App.css';
import CrudPost from './Components/CRUD/CrudPost';
import CrudGet from './Components/CRUD/CrudGet';
import CrudGetSpecific from './Components/CRUD/CrudGetSpecific';

function App() {
  return (
    <div className="App">
      <CrudPost/>
      <CrudGet/>
      <CrudGetSpecific/>
    </div>
  );
}

export default App;
