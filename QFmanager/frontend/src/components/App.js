import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import * as Bst  from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


import Header from './layout/Header';
import StudentsDashboard from './students/StudentsDashboard';
import AdvisorsDashboard from './advisors/AdvisorsDashboard';
import OfficersDashboard from './officers/OfficersDashboard';
import Login from './pages/login';
import Profile from './compo/profile';
import Alerts from './layout/Alerts';

import { Provider } from "react-redux";
import store from "../store";

// Alert Options
const alertOptions = {
    timeout: 3000, // 3000 milliseconds --> 3 seconds
    position: 'top center',

}

class App extends Component {
    render(){
        return(
            <Provider store = {store}>
                <AlertProvider template = {AlertTemplate}{...alertOptions}>
                    <Router>
                        <Fragment>
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            {/* Route path */}
                            <Switch>
                                <Route path="/student">

                                </Route>
                                <Route path="/users">

                                </Route>
                                <Route path="/">
                                    <Profile/>
                                </Route>
                            </Switch>                        


                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

/*
<div className = "container">
    <Dashboard />
</div>

<Alerts />
*/

ReactDOM.render(<App />, document.getElementById('app'));