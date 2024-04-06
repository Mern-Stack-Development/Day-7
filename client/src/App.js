import logo from './logo.svg';
import './App.css';
import CrudPost from './Components/CRUD/CrudPost';
import CrudGet from './Components/CRUD/CrudGet';
import CrudGetSpecific from './Components/CRUD/CrudGetSpecific';
import CrudUpdate from './Components/CRUD/CrudUpdate';
import CrudDelete from './Components/CRUD/CrudDelete';

function App() {
  return (
    <div className="App">
      <CrudPost/>
      <CrudGet/>
      <CrudGetSpecific/>
      <CrudUpdate/>
      <CrudDelete/>
    </div>
  );
}

export default App;
