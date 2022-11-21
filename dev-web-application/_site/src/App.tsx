import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import { ConfigProvider } from 'antd';
import { Layout } from 'antd';
import Container from './Container/Container';
import { Outlet } from 'react-router-dom';


const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#282c34',
        },
      }}
    >
      <Layout>
        <Header><NavBar /></Header>
        <Content>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Outlet />
          </header>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default App;