import React, {Component, PropTypes} from "react";
import { Button, Modal, Form, Input } from 'antd';
const FormItem = Form.Item;

const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onSave, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="编辑个人信息"
                okText="保存"
                onCancel={onCancel}
                onOk={onSave}
            >
                <Form layout="vertical">
                    <FormItem label="昵称">
                        {getFieldDecorator('newName')(<Input type="text" />)}
                    </FormItem>
                    <FormItem label="旧密码">
                        {getFieldDecorator('oldPassword')(<Input type="password" />)}
                    </FormItem>
                    <FormItem label="新密码">
                        {getFieldDecorator('newPassword')(<Input type="password" />)}
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
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleSave = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (!err) {
                const {newName,oldPassword,newPassword}=values;
                const name={newName};
                const password={oldPassword,newPassword};
                const body={name,password};
                this.props.changeInfo(body);
            }
            form.resetFields();
            this.setState({ visible: false });
        });
    };
    saveFormRef = (form) => {
        this.form = form;
    };
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>编辑信息</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onSave={this.handleSave}
                />
            </div>
        );
    }
}

Edit.propTypes = {};
Edit.defaultProps = {};


export default Edit;


