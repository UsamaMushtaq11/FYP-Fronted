import React from 'react';
import '../../App.css';
import { Layout, Avatar} from 'antd';
import cpms from '../assests/images/cpms.png';
import Title from 'antd/lib/typography/Title';

const { Header} = Layout;
const header=()=> {

    return( 
        <Header style={{ padding: 10 }}>
        <Avatar style={{ float: 'right' }} src={cpms} />
        <Title style={{ color: 'white' }} level={3}>Centralized Product Management System</Title>
      </Header>

      );
}

export default header;
