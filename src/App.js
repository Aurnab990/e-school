import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Courses from './Components/Home/Courses';
import Home from './Components/Home/Home';
import Nabvar from './Components/Home/Nabvar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import RequireAuth from './Requreauth';


function App() {
  return (
    <div>
      <Nabvar></Nabvar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        
        <Route path='/courses' element={
          <RequireAuth>
            <Courses></Courses>
          </RequireAuth>
         }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
