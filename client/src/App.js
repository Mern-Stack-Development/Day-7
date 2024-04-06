import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrudPost from './Components/CRUD/CrudPost';
import CrudGet from './Components/CRUD/CrudGet';
import CrudGetSpecific from './Components/CRUD/CrudGetSpecific';
import CrudUpdate from './Components/CRUD/CrudUpdate';
import CrudDelete from './Components/CRUD/CrudDelete';
import Login from './Components/Authentication/Login';
import Registration from './Components/Authentication/Registration';
import LoginJWT from './Components/Authorization/LoginJWT';
import PostJWT from './Components/Authorization/PostJWT';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<LoginJWT/>} />
          <Route path="/createPost" element={<PostJWT />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
