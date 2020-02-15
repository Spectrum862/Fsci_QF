import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './students/Dashboard';

class App extends Component {
    render(){
        return(
            <Fragment>
                <Header />

            </Fragment>
        )
    }
}

/*
<div className = "container">
    <Dashboard />
</div>
*/

ReactDOM.render(<App />, document.getElementById('app'));