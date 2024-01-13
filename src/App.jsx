import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import PlaceOrder from './components/PlaceOrder';
import Yourorders from './components/Yourorders';
import Signup from './components/Signup';
import Login from './components/Login';
import Update from './components/Update';
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div>
     <Router>
        <Nav/>
        <ToastContainer/>
        <Routes>
           <Route path='/' element={<Home/>}/> 
           <Route path='/placeorder' element={<PlaceOrder/>}/>
           <Route path='/yourorders' element={<Yourorders/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/update/:id' element={<Update/>}/>
           
        </Routes>
     </Router>
    </div>
  );
}

export default App;
