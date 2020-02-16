import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAdvisor } from '../../actions/advisors';

export class Form extends Component {
    state = {
        AdvisorID: "",
        academic_rank: "",
        firstname: "",
        lastname: "",
        gender: "",
        faculty: "",
        department: "",
        year_advisor: ""
    };

    static propTypes = {
        addAdvisor: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { AdvisorID, academic_rank, firstname, lastname, gender, faculty, department, year_advisor } = this.state;
        const advisor = { AdvisorID, academic_rank, firstname, lastname, gender, faculty, department, year_advisor };
        this.props.addAdvisor(advisor);
        this.setState({
            AdvisorID: "",
            academic_rank: "",
            firstname: "",
            lastname: "",
            gender: "",
            faculty: "",
            department: "",
            year_advisor: ""
        });
    }

    render() {
        const { AdvisorID, academic_rank, firstname, lastname, gender, faculty, department, year_advisor } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Advisor</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Advisor ID</label>
                        <input className="form-control" type="text" name="AdvisorID" onChange={this.onChange} value={AdvisorID}/>
                    </div>
                    <div className="form-group">
                        <label>Academic rank</label>
                        <select className="form-control" name="academic_rank" onChange={this.onChange} value={this.state.selectValue}>
                            <option>----- select Academic rank -----</option>
                            <option value="Professor">Professor</option>
                            <option value="Associated Professor">Associated Professor</option>
                            <option value="Assistant Professor">Assistant Professor</option>
                            <option value="Doctor">Doctor of Philosophy</option>
                            <option value="Lecturer">Lecturer</option>
                        </select>
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
                        <label>Year advisor</label>
                        <select className="form-control" name="year_advisor" onChange={this.onChange} value={this.state.selectValue}>
                            <option>----- select Year advisor -----</option>
                            <option value="0">No</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addAdvisor })(Form);
