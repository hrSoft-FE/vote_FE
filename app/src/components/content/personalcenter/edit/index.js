import React, {Component, PropTypes} from "react";
import {Link} from 'react-router';
import { Button, Modal, Form, Input } from 'antd';
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="编辑个人信息"
                okText="保存"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="昵称">
                        {getFieldDecorator('昵称')(<Input type="text" />)}
                    </FormItem>
                    <FormItem label="旧密码">
                        {getFieldDecorator('旧密码')(<Input type="text" />)}
                    </FormItem>
                    <FormItem label="新密码">
                        {getFieldDecorator('新密码')(<Input type="text" />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);

class Edit extends Component {
    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>编辑信息</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        );
    }
}

Edit.propTypes = {};
Edit.defaultProps = {};


export default Edit;


