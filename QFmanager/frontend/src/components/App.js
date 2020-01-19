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
<img id="qffulllogo" src="..\static\QFLOGO-1.png"></img>
<div className="login">
    <form>
        <input type="text" name="username" placeholder="USERNAME" maxlength="11"></input>
        <br></br>
        <input type="password" name="password" placeholder="PASSWORD"></input>
        <br></br>
        <button type="submit" id="loginbtn"><strong>LOG IN</strong></button>
    </form>
    <p>HAVE A PROBLEM? CONTACT US.</p>
</div>
*/



ReactDOM.render(<App />, document.getElementById("app"));
