import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import StudentDashBoard from "./students/StudentDashboard";

import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <img id="qffulllogo" src="..\static\QFLOGO-1.png"></img>
            </Fragment>
        );
    }
}
/*
<Provider store = { store }>
    <Fragment>
        <Header />
        <div className="container">
            <StudentDashBoard />
        </div>
    </Fragment>
</Provider>
*/

/*
<form>
    <button type="submit" className="loginbtn">LOG IN</button>
</form>
*/

ReactDOM.render(<App />, document.getElementById("app"));
