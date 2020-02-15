import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import StudentsDashboard from './students/StudentsDashboard';

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
    render(){
        return(
            <Provider store = {store}>
                <Fragment>
                    <Header />
                    <div className = "container">
                        <StudentsDashboard />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

/*
<div className = "container">
    <Dashboard />
</div>
*/

ReactDOM.render(<App />, document.getElementById('app'));