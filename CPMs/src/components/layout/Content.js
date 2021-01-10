import React from 'react';
import '../../App.css';
import { Layout} from 'antd';
import Title from 'antd/lib/typography/Title';
import AddProductForm from '../forms/productForm/AddProductForm';
import {Route} from 'react-router-dom';
import AddCategoryForm from '../forms/productForm/categoryForms/AddCategoryFrom';
import AddSubCategoryForm from '../forms/productForm/categoryForms/AddSubCategoryForm';
import AddAttributeForm from  '../forms/productForm/attributeForms/AddAttributeFrom';
import AddSubAttributeForm from '../forms/productForm/attributeForms/AddSubAttributeForm'
import Table from '../UI/Table';

const { Content} = Layout;
const content=()=> {
 
    return( 
        <Content style={{minHeight:'100vh'}}>
        

        <Route path="/" exact>
          
        <Title  type="light" className="banner" style={{marginTop: '50px',marginBottom:'-50px'}}></Title>
        </Route>
       
        <Route path="/add-product" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Products</Title>
        <AddProductForm/>
        </Route>
        <Route path="/view-products" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Products</Title>
        <Table/>
        </Route>
        <Route path="/view-categories" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Categories</Title>
        <Table/>
        </Route>
        <Route path="/view-sub-categories" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Sub-Categories</Title>
        <Table/>
        </Route>
        <Route path="/add-category" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Categories</Title>
        <AddCategoryForm />
        </Route>
        <Route path="/add-sub-category" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Sub-Categories</Title>
        < AddSubCategoryForm/>
        </Route>
        <Route path="/view-attributes" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Attributes</Title>
        <Table/>
        </Route>
        <Route path="/view-sub-attributes" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Sub-Attributes</Title>
        <Table/>
        </Route>
        <Route path="/add-attribute" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Attributes</Title>
        <AddAttributeForm/>
        </Route>
        <Route path="/add-sub-attribute" exact>
        <Title className="title" style={{textAlign:'center',marginTop: '100px'}}>Sub-Attributes</Title>
        <AddSubAttributeForm/>
        </Route>
     
      </Content>
  

      );
}

export default content;
