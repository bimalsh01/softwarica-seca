import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
       <Route path='/home' element={<Homepage/>}/> 
       <Route path='/register' element={<Register/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
