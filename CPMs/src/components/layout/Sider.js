import React from 'react';
import '../../App.css';
import { Layout, Menu} from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserOutlined } from '@ant-design/icons';

const { Sider} = Layout;
const sider=()=> {

    return( 
        <Sider style={{ minWidth: 220 }}>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
                Home
              </Menu.Item>
        <SubMenu
            title={
              <span> 
                <span>Products</span>
              </span>
            }
          >
            <Menu.ItemGroup key='Product' title='Product Operations'>
              <Menu.Item key='viewproducts'> View Products</Menu.Item>
              <Menu.Item key='addproduct'> Add Product</Menu.Item>
              <Menu.Item key='updateproduct'> Update Product</Menu.Item>
              <Menu.Item key='deleteproduct'> Delete Product</Menu.Item>
            
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
              <Menu.Item key='viewcategorys'>View Categories</Menu.Item>
              <Menu.Item key='addcategory'>Add Category</Menu.Item>
              <Menu.Item key='addsubcategory'>Add Sub Category</Menu.Item>
              <Menu.Item key='updatecategory'> Update Category</Menu.Item>
              <Menu.Item key='updatesubcategory'> Update Sub Category</Menu.Item>
              <Menu.Item key='deletecategory'> Delete Category</Menu.Item>
              <Menu.Item key='deletesubcategory'>Delete Sub Category</Menu.Item>
            
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
              <Menu.Item key='viewattributes'>View Attributes</Menu.Item>
              <Menu.Item key='addattribute'>Add Attribute</Menu.Item>
              <Menu.Item key='addsubattribute'>Add Sub Attribute</Menu.Item>
              <Menu.Item key='updateattribute'> Update Attribute</Menu.Item>
              <Menu.Item key='updatesubattribute'> Update Sub Attribute</Menu.Item>
              <Menu.Item key='deleteattribute'> Delete Attribute</Menu.Item>
              <Menu.Item key='deletesubattribute'>Delete Sub Attribute</Menu.Item>
            
            </Menu.ItemGroup>
          </SubMenu>
            
              
        </Menu>

      </Sider>
      );
}

export default sider;
