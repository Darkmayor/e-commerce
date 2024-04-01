
import './App.css';
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage"
import { Route,Routes} from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className="App w-lvw p-0 m-0">
      
      <Navbar/>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="Login" element = {<Login/>}/> 
          
      </Routes>
      
    
    </div>
  );
}

export default App;
