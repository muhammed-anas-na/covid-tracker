import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import India from './Components/India';
import World from './Components/World';
import Header from './Components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className='container-fluid'>
      <Header/>
    <Routes>

      <Route path='/' element={<div><India/></div>}/>
      <Route path='/world' element={<div><World/></div>}/>

    </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
