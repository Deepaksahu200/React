// import { Container , Row , Col, Form } from 'react-bootstrap';
import {BrowserRouter , Routes , Route  , Link} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import Home from './components/Home';
import Empform from './EmployeeResignation';
import Product from './components/AllEmployeea';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    <Nav variant="tabs" className='Navbar'>
        <Nav.Item>
          <Link to='/'>Home</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to='/EmployeeResignation'>Resignation page</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to='/AllEmployee'>All Employee Data</Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/EmployeeResignation' element={<Empform/>}></Route>
        <Route path='/AllEmployee' element={<Product/>}></Route>
      </Routes>
      </div> 
      </BrowserRouter>
  );
}

export default App;