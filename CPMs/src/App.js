import React from 'react';
import './App.css';
import { Layout} from 'antd';
import Header from './components/layout/header';
import Content from './components/layout/Content';
import Footer from './components/layout/Footer';
import {BrowserRouter} from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
    <div className="App">
      
      <Layout  style={{minheight:"100vh"}}>
   <Header/>
        <Layout>
          <Layout>
           <Content/>
            <Footer/>
          </Layout>
        </Layout>
      </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
