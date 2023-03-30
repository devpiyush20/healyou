import './App.css';
import Banner from './component/Banner';
import HospitalCatalog from './component/HospitalCatalog';
import Pathalogy from './component/Pathalogy';
import Login from './component/Login';
import {Switch,Route } from 'react-router-dom';
import React from 'react';
import Navbar2 from './component/Navbar2';

function App() {
  return (
    <>
                <Switch>
<React.Fragment>
             <Route exact path='/' >
   <Navbar2/>

   <Banner/>
             </Route>
            
             <Route exact path='/hospital' >
             <HospitalCatalog/>
             </Route>
             <Route exact path='/pathalogy' >
              <Pathalogy/>
             </Route>
             <Route exact path='/login' >
    <Login/>
             </Route>
             
           
            



</React.Fragment>
</Switch>
    </>
  );
}

export default App;