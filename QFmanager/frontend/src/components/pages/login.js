import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

export default class Login extends React.Component{
    render(){
        return(
            <Fragment>
                <Container>
                <Row>
                    <Col className={'profilebg'}>1 of 2</Col>
                    <Col>2 of 2</Col>
                    <p1 className="blue">testset</p1>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
                </Container>
                
            </Fragment>
        )
    }
}

