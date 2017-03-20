import React, {Component, PropTypes} from "react";
import {Button,Form,FormGroup,Col,FormControl,InputGroup} from 'react-bootstrap';
import './index.less';
import login01 from '../../../images/login/qq.png';
import login02 from '../../../images/login/weibo.png';
import login03 from '../../../images/login/wechat.png';
import close from '../../../images/login/close.png';
import phone from '../../../images/login/phone.png';
import phone_hover from '../../../images/login/phone_hover.png';
import password from '../../../images/login/password.png';
import password_hover from '../../../images/login/password_hover.png';

class ReduxLogin extends Component {
    render() {
        //you can dispatch ation by using this.props.getDemo() or
        const {data,getLogin} = this.props;

        return (
            <div className="login-wrapper">
                <div className="mask"> </div>
                <div className="login">
                    <div className="window-bar">
                        <a href="#"><img src={close} alt="点击关闭"/></a>
                    </div>
                    <div className="logo">

                    </div>
                    <div className="login-with-others">
                        <h3　className="login-line"><span>使用第三方号登录</span></h3>
                        <div　className="image-boxes">
                            <a href="#"><img src={login01} alt="qq"/></a>
                            <a href="#"><img src={login02} alt="weibo"/></a>
                            <a href="#"><img src={login03} alt="wechat"/></a>
                        </div>
                    </div>
                    <div className="login-with-phone">
                        <h3 className="login-line"><span>使用手机号登录</span></h3>
                        <Form horizontal className="login-form">
                            <FormGroup controlId="formInlineName">
                                <Col sm={8}>
                                    <InputGroup>
                                        <InputGroup.Button>
                                            <Button><img src={phone} alt="phone"/></Button>
                                        </InputGroup.Button>
                                        <FormControl  type="text" placeholder="手机号" />
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="formHorizontalPassword">
                                <Col sm={8}>
                                    <InputGroup>
                                        <InputGroup.Button>
                                            <Button><img src={password} alt="password"/></Button>
                                        </InputGroup.Button>
                                        <FormControl  type="password" placeholder="密码" />
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                            <a href="#">忘记密码?</a>
                            <FormGroup>
                                <Col  sm={8}>
                                    <Button className="login-btn" type="submit"><p>  登陆  </p></Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

ReduxLogin.propTypes = {};
ReduxLogin.defaultProps = {};


export default ReduxLogin;
