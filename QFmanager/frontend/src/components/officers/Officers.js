import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOfficers, deleteOfficer } from '../../actions/officers';

export class Officers extends Component {
    static propTypes = {
        officers: PropTypes.array.isRequired,
        getOfficers: PropTypes.func.isRequired,
        deleteOfficer: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getOfficers();
    }

    render() {
        return (
            <Fragment>
                <h2>Officers</h2>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>Officer ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Gender</th>
                            <th>Faculty</th>
                            <th>Department</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.officers.map(officer => (
                            <tr key = {officer.officerID}>
                                <td>{officer.officerID}</td>
                                <td>{officer.firstname}</td>
                                <td>{officer.lastname}</td>
                                <td>{officer.gender}</td>
                                <td>{officer.faculty}</td>
                                <td>{officer.department}</td>
                                <td><button onClick = {this.props.deleteOfficer.bind(this, officer.officerID)} className = "btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    officers: state.officers.officers
});

export default connect(mapStateToProps, { getOfficers, deleteOfficer })(Officers);

//onClick = {this.props.deleteAdvisor.bind(this, advisor.AdvisorID)}
