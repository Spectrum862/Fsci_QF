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
                <div className="login">
                    <img id="qffulllogo" src="..\static\QFLOGO-1.png"></img>
                    <form>
                        <input type="text" name="username" placeholder="USERNAME" maxLength="20"></input>
                        <br></br>
                        <input type="password" name="password" placeholder="PASSWORD"></input>
                        <br></br>
                        <button type="submit" id="loginbtn"><strong>LOG IN</strong></button>
                    </form>
                    HAVE A PROBLEM? <a className="contactlink" href="">CONTACT US</a>.
                </div>
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
        <br></br>
        <input type="password" name="password" placeholder="PASSWORD"></input>
        <br></br>
        <button type="submit" id="loginbtn"><strong>LOG IN</strong></button>
    </form>
    HAVE A PROBLEM? <a className="contactlink" href="">CONTACT US</a>.
</div>
*/

/*
<div className="qfnavbar">
    <div className="row col-12">
        <div className="col-4">
            <a href="#"><img id="qflogo" src="..\static\QFLOGO-0.png"></img></a>
        </div>
        <div className="col-4">
            <form>
                <input type="text" name="search" placeholder="Search an activity"></input>
            </form>
        </div>
        <div className="col-2">
            <a href="#"><p>Firstname Lastname</p></a>
        </div>
        <div className="col-1">
            <a id="logout" href="#"><p>log out</p></a>
        </div>
    </div>
</div>
<div className="menu col-4">
    <img id="qffulllogo" src="..\static\QFLOGO-1.png"></img>
    <p className="forwho">for the <b>ADVISOR</b></p>
    <a href="#">
        <div className="menubar">
            <p>Personal Student's QF Profile</p>
        </div>
    </a>
    <a href="#">
        <div className="menubar">
            <p>Evaluate an Activity</p>
        </div>
    </a>
    <a href="#">
        <div className="menubar">
            <p>QF Overview</p>
        </div>
    </a>
</div>
*/



ReactDOM.render(<App />, document.getElementById("app"));
