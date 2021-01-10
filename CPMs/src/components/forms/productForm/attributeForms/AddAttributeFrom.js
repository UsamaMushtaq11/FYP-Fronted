import React from 'react';

import {
  Form,
  Input,
  Tooltip,
  Typography,
  Button,

} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class AddCategoryForm extends React.Component {
  formRef = React.createRef();
  state = {
    
  };
  
  
  onFinish = (values) => {
    console.log(values);
  };
  




render(){
  
  return (
    <Form
      {...formItemLayout}
      ref={this.formRef} 
      name="Add_Attribute"
      onFinish={this.onFinish}
      scrollToFirstError
    >
      <Title style={{textAlign:"center",padding:'10px'}}>Add Attribute Form</Title>
      <Form.Item
        name="Enter Attribute Name"
        label={
          <span>
            Attribute Name&nbsp;
            <Tooltip title="Add Attribute Name">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please Enter Attribute Name!',
            whitespace: true,
          },
        ]}
      >
        <Input  placeholder="Please Enter Attribute Name"/>
      </Form.Item>
      <Form.Item
        name="Attribute Description"
        label={
          <span>
            Attribute Description&nbsp;
            <Tooltip title="Add you Category Attribute">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please Enter Attribute Description!',
            whitespace: true,
          },
        ]}
      >
        <Input.TextArea  placeholder="Please Enter Attribute Description" rows="3" />
      </Form.Item>

      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
         Add Attribute
        </Button>
      </Form.Item>
    </Form>
  );}
};

export default  AddCategoryForm;