import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import StudentsDashboard from './students/StudentsDashboard';
import AdvisorsDashboard from './advisors/AdvisorsDashboard';
import OfficersDashboard from './officers/OfficersDashboard';
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
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className = "container">
                            <StudentsDashboard />
                        </div>
                        <div className = "container">
                            <AdvisorsDashboard />
                        </div>
                        <div className = "container">
                            <OfficersDashboard />
                        </div>
                    </Fragment>
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