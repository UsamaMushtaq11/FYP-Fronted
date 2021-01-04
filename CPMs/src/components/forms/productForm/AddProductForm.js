import React from 'react';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
import Modal from '../../UI/Modal'
import MyButton from '../../UI/Button';

import { PlusOutlined } from '@ant-design/icons';

import {
  Form,
  Upload,
  Input,
  Tooltip,
  Typography,
  Select,
  Checkbox,
  Divider,
   Button
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import AddCategoryForm from './AddCategoryFrom';
import AddSubCategoryForm from './AddSubCategoryForm';
const { OptGroup} = Select;
const { Title } = Typography;
const { TreeNode } = TreeSelect;

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

let index = 0;
const normFile = (e) => {
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

class AddProductForm extends React.Component {
  formRef = React.createRef();
  state = {
    value: undefined,
    isOpen:false,
    isboxOpen:undefined,
    isOpen1:false,
    items: ['Clothes', 'Trends'],
    name: '',
    CategoryData:{
      Category:["Men","Women","Mobile"],
      SubCategory:[["Watch","Glasses","Perfume"],["Perfume","Glasses"],["I-Phone","Android","Samsung","OPPO","LG","Infinix","One-Plus"]]
    }
  };
  onNameChange = event => {
    this.setState({
      name: event.target.value,
    });
  };

  addItem = () => {
    console.log('addItem');
    const { items, name } = this.state;
    this.setState({
      items: [...items, name || `New item ${index++}`],
      name: '',
    });
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
  showModal1=()=>{
    this.setState({
      isboxOpen:false,
      isOpen1:true,
    });
    
  }
  closeModal1=()=>{
    this.setState({
      isboxOpen:undefined,
      isOpen1:false, 
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
  
  const { items, name } = this.state;
  return (
    <Form
      {...formItemLayout}
      ref={this.formRef} 
      name="Add_Product"
      onFinish={this.onFinish}
      scrollToFirstError
    >
      <Title style={{textAlign:"center",padding:'10px'}}>Add Product Form</Title>
      <Form.Item
        name="Product Name"
        label={
          <span>
            Product Name&nbsp;
            <Tooltip title="Add you product name">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please Enter Product Name!',
            whitespace: true,
          },
        ]}
      >
        <Input  placeholder="Please Enter Product Name"/>
      </Form.Item>
      <Form.Item
        name="Product Description"
        label={
          <span>
            Product Description&nbsp;
            <Tooltip title="Add you product Description">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please Enter Product Description!',
            whitespace: true,
          },
        ]}
      >
        <Input.TextArea  placeholder="Please Enter Product Description" rows="3" />
      </Form.Item>

      <Form.Item
        name="Category"
        label="Category"
        rules={[
          {
            required: true,
            message: 'Please Select At Least One Category!',
         
          },
        ]}
      >
         <TreeSelect
        virtual={false}
        showSearch
        open={this.state.isboxOpen}
        style={{ width: '100%' }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please Select Categories"
        allowClear
        required
        multiple
        treeDefaultExpandAll
        onChange={this.onChange}
        dropdownRender={menu => (
          <div>
            {menu}
            <MyButton style={{margin:'20px'}} type="primary" content="Add Category" onClick={this.showModal}/>
            <MyButton style={{margin:'20px'}} type="primary" content="Add Sub-Category" onClick={this.showModal1}/>
            <Modal footer={null} name={"Add Sub-Category"} centered={true} visible={this.state.isOpen1} onCancel={this.closeModal1} title="Add Sub-Category" content={<AddSubCategoryForm/>}/>   
            <Modal footer={null} name={"Add Category"} centered={true} visible={this.state.isOpen} onCancel={this.closeModal} title="Add Category" content={<AddCategoryForm/>}/>   
          </div>
        )}
      >
        {this.state.CategoryData.Category.map((item,index) => (
          <TreeNode key={item} value={item} title={item}>
            {this.state.CategoryData.SubCategory[index].map((Subitem,key) =>(
                <TreeNode key={item+"\\"+Subitem} value={item+"\\"+Subitem} title={Subitem}/>
            ))}
          </TreeNode>

        ))}
        
    
      </TreeSelect>
      </Form.Item>
      
      
          <Form.Item
        name="Tags"
        label="Tags"
        content="Add New Tag"
        rules={[
          {
            required: true,
            message: 'Please Select Tag!',
           
          },
        ]}
       
      >
         <Select
        mode="multiple"
        placeholder="Please Select Tags"
        dropdownRender={menu => (
          <div>
            {menu}
            <Divider style={{ margin: '4px 0' }} />
            <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
              <Input style={{ flex: 'auto' }} value={name} onChange={this.onNameChange} />
              <Button type="primary"
                style={{ margin:"5px" }}
                onClick={this.addItem}
              >
                <PlusOutlined /> Add Tag
              </Button>
            </div>
          </div>
        )}
      >
        {items.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
      </Form.Item>
          
     

<Form.Item
        name="upload"
        label="Upload Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          { required: true,
             message: 'Image is required' }
        ]}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Gallery">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} >
          <Upload.Dragger multiple={true} name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>
      <Form.Item
           name="Product Type"
           label="Product Type"
           
            rules={[
              { required: true,
                 message: 'Product Type is required' },
            ]}
          >
            <Select  placeholder="Select Product Type" >
            <OptGroup value="pTypes" label="Product Types">
            <Option value="simple">Simple</Option>
            <Option value="variation">Variation</Option>
            <Option value="grouped">Grouped</Option>
            <Option value="bundle">Bundle</Option>
              
            </OptGroup>
         
            </Select>
          </Form.Item>
    
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="google.com">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );}
};

export default AddProductForm ;