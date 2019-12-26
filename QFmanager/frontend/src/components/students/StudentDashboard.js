import React, { Fragment } from 'react';
import Info from './Info';
import Act_hr_stat from './Act_hr_stat';
import QFstat from './QFstat';
import Activity_join_list from './Activity_join_list';
import Evaluation_form from './Evaluation_form';

export default function StudentDashboard() {
    return (
        <Fragment>
            <Info />
            <Act_hr_stat />
            <QFstat />
            <Activity_join_list />
            <Evaluation_form />
        </Fragment>
    )
};