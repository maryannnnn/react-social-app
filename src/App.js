import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Dialogs from "./components/Diologs/Dialogs";
import DialogsContainer from "./reactredux/DialogsContainer";


const App = () => {

  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header/>
              <Navbar/>

              <div className='app-wrapper-content'>
                  <Switch>

                      <Route path='/dialogs' render={() => <DialogsContainer />} />
                      <Route path='/profile'  render={() => <Profile />} />

                  </Switch>
              </div>
          </div>
      </BrowserRouter>
  )
}

export default App
