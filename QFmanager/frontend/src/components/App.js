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
                <div className="qfheader">
                    <div className="row col-12">
                        <div className="col-1">
                            <img className="profilepic" src="..\static\IMG_8139.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="qfnavbar fixed-bottom">
                    <div className="row">
                        <div className="col-6">
                            <a className="qfnavlink" href="#"><img className="icon_home" src="..\static\homeactive.svg"></img><br></br>หน้าแรก</a>
                        </div>
                        <div className="col-6">
                            <a className="qfnavlink" href="#"><img className="icon_s_activity" src="..\static\QFactive_.svg"></img><br></br>ค้นหากิจกรรม</a>
                        </div>
                    </div>
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
        <input type="password" name="password" placeholder="PASSWORD"></input>
        <p className="erralert">[error alert text]</p>
        <button type="submit" id="loginbtn"><strong>LOG IN</strong></button>
    </form>
    HAVE A PROBLEM? <a className="contactlink" href="">CONTACT US</a>.
</div>
*/

/*
<div className="qfheader">
    <div className="row col-12">
        <div className="col-1">
            <img className="profilepic" src="..\static\IMG_8139.jpg"></img>
        </div>
    </div>
</div>
<div className="qfnavbar fixed-bottom">
    <div className="row">
        <div className="col-6">
            <a className="qfnavlink" href="#"><img className="icon_home" src="..\static\homeactive.svg"></img><br></br>หน้าแรก</a>
        </div>
        <div className="col-6">
            <a className="qfnavlink" href="#"><img className="icon_s_activity" src="..\static\QFactive_.svg"></img><br></br>ค้นหากิจกรรม</a>
        </div>
    </div>
</div>
*/



ReactDOM.render(<App />, document.getElementById("app"));
