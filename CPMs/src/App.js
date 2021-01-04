import React from 'react';
import './App.css';
import { Layout} from 'antd';
import Sider from './components/layout/Sider';
import Header from './components/layout/header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';




function App() {

  return (
    <div className="App">
      <Layout>
   <Header/>
        <Layout>
          <Sider/>
          <Layout>
           <Content/>
            <Footer/>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
