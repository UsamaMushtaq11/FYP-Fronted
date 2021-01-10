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
      name="Add_Product"
      onFinish={this.onFinish}
      scrollToFirstError
    >
      <Title style={{textAlign:"center",padding:'10px'}}>Add Category Form</Title>
      <Form.Item
        name="Enter Category Name"
        label={
          <span>
            Category Name&nbsp;
            <Tooltip title="Add Catogrey Name">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please Enter Cateogry Name!',
            whitespace: true,
          },
        ]}
      >
        <Input  placeholder="Please Enter Category Name"/>
      </Form.Item>
      <Form.Item
        name="Category Description"
        label={
          <span>
            Category Description&nbsp;
            <Tooltip title="Add you Category Description">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please Enter Category Description!',
            whitespace: true,
          },
        ]}
      >
        <Input.TextArea  placeholder="Please Enter Category Description" rows="3" />
      </Form.Item>

      
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
         Add Category
        </Button>
      </Form.Item>
    </Form>
  );}
};

export default  AddCategoryForm;