import React from 'react';
import Modal from '../../../UI/Modal'
import MyButton from '../../../UI/Button';

import {
  Form,
  Input,
  Tooltip,
  Typography,
  Select,
   Button
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import AddCategoryForm from './AddCategoryFrom';
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
const { Option } = Select;


class AddSubCategoryForm extends React.Component {
  formRef = React.createRef();
  state = {
    value: undefined,
    isOpen:false,
    isboxOpen:undefined,
    items: ['Clothes', 'Trends'],
   
  };
 


  onChange = value => {
    console.log(value);
    this.setState({ value });
  };
  showModal=()=>{
    this.setState({
      isboxOpen:false,
      isOpen:true,
    });
    
  }
 
  closeModal=()=>{
    this.setState({
      isboxOpen:undefined,
      isOpen:false, 
    });
  }
  onFinish = (values) => {
    console.log(values);
  };
  




render(){
  
  const { items} = this.state;
  return (
    <Form
      {...formItemLayout}
      ref={this.formRef} 
      name="Add_Product"
      onFinish={this.onFinish}
      scrollToFirstError
    >
      <Title style={{textAlign:"center",padding:'10px'}}>Add Sub-Category Form</Title>

 
      
      <Form.Item
        name="Category"
        label="Category"
        content="Select Category"
        rules={[
          {
            required: true,
            message: 'Please Select Category!',
           
          },
        ]}
       
      >
         <Select
        virtual={true}
        placeholder="Please Select Category"
        open={this.state.isboxOpen}
        dropdownRender={menu => (
          <div>
            {menu}
            <MyButton style={{margin:'20px'}} type="primary" content="Add Category" onClick={this.showModal}/>
            <Modal footer={null} name={"Add Category"} centered={true} visible={this.state.isOpen} onCancel={this.closeModal} title="Add Category" content={<AddCategoryForm/>}/> 
          </div>
        )}
      >
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
      </Form.Item>
          

      <Form.Item
        name="Sub-Category Name"
        label={
          <span>
            Sub-Category Name&nbsp;
            <Tooltip title="Add Sub-Category name">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please Sub-Category Name!',
            whitespace: true,
          },
        ]}
      >
        <Input  placeholder="Please Enter Sub-Category Name"/>
      </Form.Item>
     


      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add Sub-Category
        </Button>
      </Form.Item>
    </Form>
  );}
};

export default AddSubCategoryForm ;