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
<div className="login">
    <img id="qffulllogo" src="..\static\QFLOGO-1.png"></img>
    <form>
        <input type="text" name="username" placeholder="USERNAME" maxLength="20"></input>
        <input type="password" name="password" placeholder="PASSWORD"></input>
        <p className="erralert">[error alert text]</p>
        <button type="submit" id="loginbtn"><strong>LOG IN</strong></button>
    </form>
    HAVE A PROBLEM? <a className="contactlink" href="">CONTACT US</a>.
</div>
*/

/*
<div className="qfnavbar">
    <div className="row col-12">
        <div className="col-1"></div>
        <div className="col-2">
            <a href="#"><img id="qflogo" src="..\static\QFLOGO-0.png"></img></a>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
            <form>
                <input type="text" name="search" placeholder="Search an activity"></input>
            </form>
        </div>
        <div className="col-1"></div>
        <div className="col-05"></div>
        <div className="col-1">
            <a id="logout" href="#"><p>log out</p></a>
        </div>
        <div className="col-05"></div>
        <div className="col-1"></div>
    </div>
</div>
*/



ReactDOM.render(<App />, document.getElementById("app"));
