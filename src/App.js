import './App.css';
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import Card from './component/Card';
import Catlog from './component/Catlog';
import HospitalCatalog from './component/HospitalCatalog';
import Pathalogy from './component/Pathalogy';
import Login from './component/Login';
import Register from './component/Register';
import {Switch,Route } from 'react-router-dom';
import React from 'react';
import BookForm from './component/BookForm';
import BedForm from './component/BedForm';


function App() {
  return (
    <div className="App">
             <Switch>
<React.Fragment>
   {/* <NavBar/> */}
             <Route exact path='/' >
              
   <Banner/>
             </Route>
             <Route exact path='/bookappointment' >
              
              <BookForm/>
                        </Route>
                        <Route exact path='/bookbed' >
              
              <BedForm/>
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
             <Route exact path='/register' >
    <Register/>
             </Route>

   

</React.Fragment>
</Switch>
    </div>
  );
}

export default App;
