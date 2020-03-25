import React, { Component } from 'react';
import bgImg from '../../static/images/login_bgimg.png';
import './index.scss';

import { Form, Input, Button, Checkbox ,Radio  } from 'antd';
const layout = {
  labelAlign:'left',
  labelCol: {
    span: 8,
  },

};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

class Login extends Component {
  state = {
    value: 1,
  };
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  render() {

    return (
      <div className="loginPage">
        <div className="wapper">
          <h1>学生宿舍信息管理系统——cms后台管理系统</h1>
          <div className="login-container">
            <img src={bgImg} className='bgImg' alt="" />
            <div className="flex-box">
              <Form
                {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="账号"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item 
                  label=""
                  name="peopleType" >  
                  <Radio.Group name="radiogroup" defaultValue={1} >
                    <Radio value={1}>管理员</Radio>
                    <Radio value={2}>宿管员</Radio>
                    <Radio value={3}>学生</Radio>
                    
                  </Radio.Group>
                  </Form.Item>

                <Form.Item  style={{"marginTop":"60px"}}>
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default Login;