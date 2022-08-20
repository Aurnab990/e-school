import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nabvar from './Components/Home/Nabvar';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <div>
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
