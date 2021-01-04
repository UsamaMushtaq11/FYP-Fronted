import React from 'react';
import { Button } from 'antd';
import '../../App.css';

const button =(props)=>{
    return (
            <Button {...props}>
        {props.content}
      </Button>
            
       
    );
  }




export default button;