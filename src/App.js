// import logo from './logo.svg';
import './App.css';
// import logo from './priceya-text-logo.png';
import ProductPage2 from './ProductPage2';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const ks = (path) => {
  //   return(<Link to={path}>
  //       <img 
  //           className="header__logo"
  //         src={logo}
  //       ></img>
  //   </Link>)
  // }

  return (

    
      <Router>
        <div className="app">
          {/* Home */}
              {/* <Header3
                linkComponent = {linkComp}
                // changeFilterVariable = {changeFilterVariable}
                // returnFilterValue = {returnFilterVariable}
                logoX = {ks("/")}
                redirectionList = {li}
                toggle={toggleMenu}
                /> */}
            {/* 'Apple-iPhone-11-Mobile-Phone-': {'key1': 'phones', 'key2': 'mobile-phones'}, */}
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
