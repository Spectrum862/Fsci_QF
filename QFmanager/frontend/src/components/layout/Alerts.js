import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
    }

    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        if(error !== prevProps.error){
            if (error.msg.studentID) {
                alert.error(`Student ID: ${error.msg.studentID.join()}`);
            }
            if (error.msg.AdvisorID) {
                alert.error(`Advisor ID: ${error.msg.AdvisorID.join()}`);
            }
            if (error.msg.officerID) {
                alert.error(`Officer ID: ${error.msg.officerID.join()}`);
            }
            if (error.msg.academic_rank) {
                alert.error(`Academic Rank: ${error.msg.academic_rank.join()}`);
            }
            if (error.msg.firstname) {
                alert.error(`Firstname: ${error.msg.firstname.join()}`);
            }
            if (error.msg.lastname) {
                alert.error(`Lastname: ${error.msg.lastname.join()}`);
            }
            if (error.msg.gender) {
                alert.error(`Gender: ${error.msg.gender.join()}`);
            }
            if (error.msg.degree_of_study) {
                alert.error(`Degree of Study: ${error.msg.degree_of_study.join()}`);
            }
            if (error.msg.year_of_study) {
                alert.error(`Year of Study: ${error.msg.year_of_study.join()}`);
            }
            if (error.msg.faculty) {
                alert.error(`Faculty: ${error.msg.faculty.join()}`);
            }
            if (error.msg.department) {
                alert.error(`Department: ${error.msg.department.join()}`);
            }
            if (error.msg.field_of_study) {
                alert.error(`Field of Study: ${error.msg.field_of_study.join()}`);
            }
            if (error.msg.GPAX) {
                alert.error(`GPAX: ${error.msg.GPAX.join()}`);
            }
            if (error.msg.year_advisor) {
                alert.error(`Year advisor: ${error.msg.year_advisor.join()}`);
            }
        }

        if(message !== prevProps.message){
            if (message.deleteStudent) alert.success(message.deleteStudent);
            if (message.addStudent) alert.success(message.addStudent);
            if (message.deleteAdvisor) alert.success(message.deleteAdvisor);
            if (message.addAdvisor) alert.success(message.addAdvisor);
            if (message.deleteOfficer) alert.success(message.deleteOfficer);
            if (message.addOfficer) alert.success(message.addOfficer);
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
