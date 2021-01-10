import React from 'react';
import '../../App.css';
import { Layout} from 'antd';


const { Footer} = Layout;
const footer=()=> {

    return( 
        <Footer   style={{ backgroundColor: 'black',color:'white',textAlign: 'center',  position: 'relative',left: 0,bottom: 0,width: '100%',height:'5%' }}>Centralized Product Management System Copyright 2021</Footer>
      );
}

export default footer;
