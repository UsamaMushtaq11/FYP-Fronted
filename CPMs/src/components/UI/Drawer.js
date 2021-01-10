import { Drawer, Space } from 'antd';
import React from 'react';
import {  Menu} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserOutlined ,BarsOutlined} from '@ant-design/icons';


class MyDrawer extends React.Component {
  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  render() {
    const { placement, visible } = this.state;
    return (
      <>
        <Space>
        <BarsOutlined  onClick={this.showDrawer}/>
         
        </Space>
        <Drawer
          title="Centralized Product Management System"
          placement={placement}
          closable={false}
          onClose={this.onClose}
          visible={visible}
          key={placement}
         
        >


           <Menu  theme="light" mode="inline" defaultSelectedKeys={['home'] } style={{width:'100%'}}>
       
        <Menu.Item key="login" icon={<UserOutlined />}>
       <a href="/"> Home</a>
              </Menu.Item>
        <SubMenu
            title={
              <span> 
                <span>Products</span>
              </span>
            }
          >
            <Menu.ItemGroup key='Product' title='Product Operations'>
              <Menu.Item key='viewproducts'> <a href="view-products"> View Products</a></Menu.Item>
              <Menu.Item key='addproduct'> <a href="/add-product"> Add Product</a></Menu.Item>
            
            </Menu.ItemGroup>
          </SubMenu>

          <SubMenu
            title={
              <span> 
                <span>Categories</span>
              </span>
            }
          >
            <Menu.ItemGroup key='category' title='Category & Sub Category Operations'>
              <Menu.Item key='viewcategorys'><a href="/view-categories"> View Categories</a></Menu.Item>
              <Menu.Item key='viewsubcategorys'><a href="/view-sub-categories"> View Sub Categories</a></Menu.Item>
              <Menu.Item key='addcategory'><a href="/add-category"> Add Category</a></Menu.Item>
              <Menu.Item key='addsubcategory'><a href="/add-sub-category"> Add Sub Category</a></Menu.Item>
            
            </Menu.ItemGroup>
          </SubMenu>

          <SubMenu
            title={
              <span> 
                <span>Attributes</span>
              </span>
            }
          >
            <Menu.ItemGroup key='attribute' title='Attribute & Sub Sub-Attribute Operations'>
              <Menu.Item key='viewattributes'><a href="/view-attributes">View Attributes</a></Menu.Item>
              <Menu.Item key='viewattributes'><a href="/view-sub-attributes">View Sub Attributes</a></Menu.Item>
              <Menu.Item key='addattribute'><a href="/add-attribute">Add Attribute</a></Menu.Item>
              <Menu.Item key='addsubattribute'><a href="/add-sub-attribute">Add Sub Attribute</a></Menu.Item>
            
            </Menu.ItemGroup>
          </SubMenu>
            
              
        </Menu>
        </Drawer>
      </>
    );
  }
}

export default MyDrawer;
