import {Routes,Route,BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import User from './User';
import Body from './Body';
import Navabr from './Navbar'
import Header from './Header';
import Userform from './Userform';
import CardDetails from './Card1';
import bckimg from './kittur.jpg'
import Home from './Home';
import Footer from './Footer';
import Searchbar from './Searchbar'
import Adminspace from './Adminspace.js'
import Admin from './Admin'
import Addplace from './Addplace';
import Deleteplace from './Deleteplace'
import Addreview from './Addreview';
import Deleteuser from './Deleteuser';

function App() {
  return (
    // <div className="App" style={{ backgroundImage: `url(${bckimg})` }}>
  <div className="App">
    
      {/* <h2>Hello</h2> */}
    <BrowserRouter>
    <Navabr/>
      
    <Routes>
      <Route path='/userdetails' element={<Deleteuser/>}></Route>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/places' element={<Body/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/det' element={<CardDetails />}></Route>
      <Route path='/search' element={<Searchbar/>}></Route>
      <Route path='/Adminspace' element={<Adminspace/>}></Route>
      <Route path='/login' element={<Userform/>}></Route>
      <Route path='/Admin' element={<Admin/>}></Route>
      <Route path='/Addplace' element={<Addplace/>}></Route>
      <Route path='/Deleteplace' element={<Deleteplace/>}></Route>
      <Route path='/Addreview' element={<Addreview/>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
  );
}

export default App;                        
