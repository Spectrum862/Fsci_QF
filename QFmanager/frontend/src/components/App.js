import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import StudentDashBoard from "./students/StudentDashboard";

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    
                </div>
            </Fragment>
        );
    }
}
//<StudentDashBoard />
ReactDOM.render(<App />, document.getElementById("app"));
