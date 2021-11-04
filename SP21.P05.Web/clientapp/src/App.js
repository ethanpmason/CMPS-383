// import logo from './logo.svg';
import React, {useState, useEffect} from 'react'; 
import './App.css';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import Home from './pages';
import { Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Login from './pages/login';
import Contact from './pages/contact';
import Events from './pages/events';
import Dropdown from './components/Dropdown';
//import axios from 'axios';

function App() {
  const[isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
      setIsOpen(false);
      console.log('i resize');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });


  return (
    <>
      <Navbar toggle={toggle}/>  
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/events" component={Events} />
      </Switch> 
      
    </>
  );
}

export default App;
