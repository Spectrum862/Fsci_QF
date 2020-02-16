import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addOfficer } from '../../actions/officers';

export class Form extends Component {
    state = {
        officerID: "",
        firstname: "",
        lastname: "",
        gender: "",
        faculty: "",
        department: ""
    }

    static propTypes = {
        addOfficer: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { officerID, firstname, lastname, gender, faculty, department } = this.state;
        const officer = { officerID, firstname, lastname, gender, faculty, department };
        this.props.addOfficer(officer);
        this.setState({
            officerID: "",
            firstname: "",
            lastname: "",
            gender: "",
            faculty: "",
            department: ""
        });
    }

    render() {
        const { officerID, firstname, lastname, gender, faculty, department } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Officer</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Officer ID</label>
                        <input className="form-control" type="text" name="officerID" onChange={this.onChange} value={officerID}/>
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addOfficer })(Form);
