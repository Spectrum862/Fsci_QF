import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addStudent } from '../../actions/students';

export class Form extends Component {
    state = {
        studentID: '',
        firstname: '',
        lastname: '',
        gender: '',
        degree_of_study: '',
        year_of_study: '',
        faculty: '',
        department: '',
        field_of_study: '',
        GPAX: ''
    }

    static propTypes = {
        addStudent: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { studentID, firstname, lastname, gender, degree_of_study, year_of_study, faculty, department, field_of_study, GPAX } = this.state;
        const student = { studentID, firstname, lastname, gender, degree_of_study, year_of_study, faculty, department, field_of_study, GPAX };
        this.props.addStudent(student);
        this.setState({
            studentID: '',
            firstname: '',
            lastname: '',
            gender: '',
            degree_of_study: '',
            year_of_study: '',
            faculty: '',
            department: '',
            field_of_study: '',
            GPAX: ''
        });
    }

    render() {
        const { studentID, firstname, lastname, gender, degree_of_study, year_of_study, faculty, department, field_of_study, GPAX } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Student</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Student ID</label>
                        <input className="form-control" type="text" name="studentID" pattern=".{11,11}" maxLength="11" onChange={this.onChange} value={studentID}/>
                    </div>
                    <div className="form-group">
                        <label>Firstname</label>
                        <input className="form-control" type="text" name="firstname" onChange={this.onChange} value={firstname}/>
                    </div>
                    <div className="form-group">
                        <label>Lastname</label>
                        <input className="form-control" type="text" name="lastname" onChange={this.onChange} value={lastname}/>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>
                        <select className="form-control" name="gender" onChange={this.onChange} value={this.state.selectValue}>
                            <option>----- select gender -----</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Degree of Study</label>
                        <select className="form-control" name="degree_of_study" onChange={this.onChange} value={this.state.selectValue}>
                            <option>----- select a degree of study -----</option>
                            <option value="Bachelor">Bachelor's degree</option>
                            <option value="Master">Master's degree</option>
                            <option value="Doctor">Doctor of Philosophy's degree</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Year of Study</label>
                        <select className="form-control" name="year_of_study" onChange={this.onChange} value={this.state.selectValue}>
                            <option>----- select a year of study -----</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Faculty</label>
                        <select className="form-control" name="faculty" onChange={this.onChange} value={this.state.selectValue}>
                            <option>----- select faculty -----</option>
                            <option value="Science">Science</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Department</label>
                        <input className="form-control" type="text" name="department" onChange={this.onChange} value={department}/>
                    </div>
                    <div className="form-group">
                        <label>Field of Study</label>
                        <input className="form-control" type="text" name="field_of_study" onChange={this.onChange} value={field_of_study}/>
                    </div>
                    <div className="form-group">
                        <label>GPAX</label>
                        <input className="form-control" type="text" name="GPAX" onChange={this.onChange} value={GPAX}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addStudent })(Form);

/*
<div className="form-group">
    <label>Gender</label>
    <input className="form-control" type="text" name="gender" onChange={this.onChange} value={gender}/>
</div>
<div className="form-group">
    <label>Degree of Study</label>
    <input className="form-control" type="text" name="degree_of_study" onChange={this.onChange} value={degree_of_study}/>
</div>
<div className="form-group">
    <label>Year of Study</label>
    <input className="form-control" type="text" name="year_of_study" onChange={this.onChange} value={year_of_study}/>
</div>
<div className="form-group">
    <label>Faculty</label>
    <input className="form-control" type="text" name="faculty" onChange={this.onChange} value={faculty}/>
</div>
*/