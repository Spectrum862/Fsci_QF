import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

export default class Profile extends React.Component{
    name = 'Soijinda Soijinda'
    render(){
        return(
            <Fragment>
                <Container className={'profilebg'}>
                    <Row>
                        <Col xs={'2'}>
                            <div className="propic"></div>
                        </Col>
                        <Col>
                            <h3 className="title">{this.name}</h3>
                            <h6 className="sub-title">{this.name}</h6>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}