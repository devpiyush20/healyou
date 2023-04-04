import './App.css'
import Banner from './component/Banner'
import HospitalCatalog from './component/HospitalCatalog'
import Pathalogy from './component/Pathalogy'
import Login from './component/Login'
import Register from './component/Register'
import { Switch, Route } from 'react-router-dom'
import React from 'react'
import BookForm from './component/BookForm'
import BedForm from './component/BedForm'
import Services from './component/Services'
import Map from './component/Map'
import Doc from './component/Doc'
import Vcall from './component/Vcall'
import NavBar2 from './component/Navbar2'
import Dashboard from './component/Dashboard'
import DoctorDashboard from './component/DoctorDashborad'
function App() {
  return (
    <>
      <Switch>
        <React.Fragment>
          <NavBar2 />
          <Route exact path='/'>
            <Banner />
          </Route>
          <Route exact path='/bookappointment'>
            <BookForm />
          </Route>
          <Route exact path='/bookbed'>
            <BedForm />
          </Route>
          <Route exact path='/hospital'>
            <HospitalCatalog />
          </Route>
          <Route exact path='/pathalogy'>
            <Pathalogy />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/services'>
            <Services />
          </Route>
          <Route exact path='/map'>
            <Map />
          </Route>
          <Route exact path='/doc'>
            <Doc />
          </Route>
          <Route exact path='/vcall'>
            <Vcall />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/doctorboard'>
            <DoctorDashboard />
          </Route>
        </React.Fragment>
      </Switch>
    </>
  )
}

export default App
