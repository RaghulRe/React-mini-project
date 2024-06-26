import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Users from './components/Users';
function App() {
  return (
   <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/users' element={<Users/>}/>
     </Routes>
   </div>
  );
}

export default App;
