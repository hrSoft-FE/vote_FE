import React, {Component, PropTypes} from "react";
import {Button, Form, FormGroup, Col, FormControl, ControlLabel, Checkbox} from 'react-bootstrap';
import './index.less';
import close from '../../../images/login/close.png';

class ReduxRegister extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data, getLogin} = this.props;

        return (
            <div className="register-wrapper">
                <div className="mask"></div>
                <div className="register">

                    <div className="form-wrapper">
                        <div className="window-bar">
                            <a href="#"><img src={close} alt="点击关闭"/></a>
                        </div>
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail" className="input-box">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email"/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalPassword" className="input-box">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Password
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="password" placeholder="Password"/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalEmail" className="input-box">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email"/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalEmail" className="input-box">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email"/>
                                </Col>
                            </FormGroup>

                            <FormGroup controlId="formHorizontalEmail" className="input-box">
                                <Col componentClass={ControlLabel} sm={2}>
                                    Email
                                </Col>
                                <Col sm={10}>
                                    <FormControl type="email" placeholder="Email"/>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Checkbox>Remember me</Checkbox>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col smOffset={2} sm={10}>
                                    <Button type="submit">
                                        Sign in
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>

                    </div>
                </div>


            </div>
        );
    }
}

ReduxRegister.propTypes = {};
ReduxRegister.defaultProps = {};


export default ReduxRegister;
