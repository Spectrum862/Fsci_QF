import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAdvisors, deleteAdvisor } from '../../actions/advisors';

export class Advisors extends Component {
    static propTypes = {
        advisors: PropTypes.array.isRequired,
        getAdvisors: PropTypes.func.isRequired,
        deleteAdvisor: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getAdvisors();
    }

    render() {
        return (
            <Fragment>
                <h2>Advisors</h2>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>Advisor ID</th>
                            <th>Academic Rank</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Gender</th>
                            <th>Faculty</th>
                            <th>Department</th>
                            <th>Year Advisor</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.advisors.map(advisor => (
                            <tr key = {advisor.AdvisorID}>
                                <td>{advisor.AdvisorID}</td>
                                <td>{advisor.academic_rank}</td>
                                <td>{advisor.firstname}</td>
                                <td>{advisor.lastname}</td>
                                <td>{advisor.gender}</td>
                                <td>{advisor.faculty}</td>
                                <td>{advisor.department}</td>
                                <td>{advisor.year_advisor}</td>
                                <td><button onClick = {this.props.deleteAdvisor.bind(this, advisor.AdvisorID)} className = "btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    };
}

const mapStateToProps = state => ({
    advisors: state.advisors.advisors
});

export default connect(mapStateToProps, { getAdvisors, deleteAdvisor })(Advisors);

//onClick = {this.props.deleteAdvisor.bind(this, advisor.AdvisorID)}