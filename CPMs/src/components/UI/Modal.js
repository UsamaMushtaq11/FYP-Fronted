import React from 'react';
import { Modal} from 'antd';

const App = (props) => {
  return (
    <>
    
      <Modal {...props} >
      {props.content}
      </Modal>
    </>
  );
};

export default App;