import React from 'react';
import '../../App.css';
import { Layout, Avatar} from 'antd';
import cpms from '../assests/images/cpms.png';
import Title from 'antd/lib/typography/Title';
import Drawer from '../UI/Drawer';

const { Header} = Layout;
const header=()=> {

    return( 
        <Header className="header">
        
        <Avatar style={{ float: 'right' }} src={cpms} />
        <Title className="headerTitle" level={3}> <Drawer/> Centralized Product Management System</Title>
     
      </Header>

      );
}

export default header;
