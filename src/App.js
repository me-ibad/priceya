// import logo from './logo.svg';
import './App.css';
// import logo from './priceya-text-logo.png';
import ProductPage2 from './ProductPage2';
import { useState, useEffect } from 'react'
import {  Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header3 from './Header3';
import logo from './priceya-text-logo.png';
import './Header.css'
import './MultiLevelNav.css'

function App() {
  
  const [showMenu, setShowMenu] = useState(false);
  const [filterVariable, setFilterVariable] = useState('Full Category');

  const linkComp = (path, value) => {
    return(
        <Link to={path}>
            <a className="sub__menu-item2">
                {value.replaceAll("-", " ")}
            </a>
        </Link>
    )
  }
  const toggleMenu = () => {
    if(showMenu == false){
        setShowMenu(true);
    }else{
        setShowMenu(false);
    }
    console.log(showMenu)
  }
  function returnFilterVariable(){
    return filterVariable;
  }
  
  const changeFilterVariable = (value) => {
    setFilterVariable(value)
  }
  
  const ks = (path) => {
    return(<Link to={path}>
        <img 
            className="header__logo"
          src={logo}
        ></img>
    </Link>)
  }


  return (
      <Router>
        <div className="app">
          
          <Header3
              linkComponent = {linkComp}
              changeFilterVariable = {changeFilterVariable}
              returnFilterValue = {returnFilterVariable}
              logoX = {ks("/")}
              
              toggle={toggleMenu}
              />
            
            <Switch>
              <Route path='/' exact={true}> 
                <ProductPage2 name="Apple-iPhone-11-Mobile-Phone-" key1="phones" key2 = "mobile-phones" />
              </Route>
             
            </Switch>
          
        </div>
      </Router>
      
  );
}

export default App;
