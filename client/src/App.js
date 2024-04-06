import logo from './logo.svg';
import './App.css';
import CrudPost from './Components/CRUD/CrudPost';
import CrudGet from './Components/CRUD/CrudGet';

function App() {
  return (
    <div className="App">
      <CrudPost/>
      <CrudGet/>
    </div>
  );
}

export default App;
