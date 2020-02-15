import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStudents, deleteStudent } from '../../actions/students';

export class Students extends Component {
    static propTypes = {
        students: PropTypes.array.isRequired,
        getStudents: PropTypes.func.isRequired,
        deleteStudent: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getStudents();
    }

    render() {
        return (
            <Fragment>
                <h2>Students</h2>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Gender</th>
                            <th>Degree of study</th>
                            <th>Year of study</th>
                            <th>Faculty</th>
                            <th>Department</th>
                            <th>Field of study</th>
                            <th>GPAX</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.students.map(student => (
                            <tr key = {student.studentID}>
                                <td>{student.studentID}</td>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                                <td>{student.gender}</td>
                                <td>{student.degree_of_study}</td>
                                <td>{student.year_of_study}</td>
                                <td>{student.faculty}</td>
                                <td>{student.department}</td>
                                <td>{student.field_of_study}</td>
                                <td>{student.GPAX}</td>
                                <td><button onClick = {this.props.deleteStudent.bind(this, student.studentID)} className = "btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    students: state.students.students
});

export default connect(mapStateToProps, { getStudents, deleteStudent })(Students);
