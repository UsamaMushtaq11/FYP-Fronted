import React from 'react';
import '../../App.css';
import { Layout,  Breadcrumb} from 'antd';
import Title from 'antd/lib/typography/Title';
import AddProductForm from '../forms/productForm/AddProductForm';

const { Content} = Layout;
const content=()=> {

    return( 
        <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Title>Products</Title></Breadcrumb.Item>
        </Breadcrumb>
        
        <AddProductForm />
     
      </Content>
  

      );
}

export default content;
