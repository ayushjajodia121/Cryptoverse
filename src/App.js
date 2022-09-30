import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, CryptoDetails, Cryptocurrencies, News, Homepage } from './components'

function App() {
  return (
    // <>
    //   <Layout>
    //     <Header>header</Header>
    //     <Layout>
    //       <Sider>left sidebar</Sider>
    //       <Content>main content</Content>
    //       <Sider>right sidebar</Sider>
    //     </Layout>
    //     <Footer>footer</Footer>
    //   </Layout>
    // </>
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path ='/'element={<Homepage />}>
              </Route>
              <Route exact path ='/cryptocurrencies' element={<Cryptocurrencies />}>
              </Route>
              <Route exact path ='/exchanges'element={<Exchanges />}>
              </Route>
              <Route exact path ='/news'element={<News />}>
              </Route>
              <Route exact path ='/crypto/:coinId'element={<CryptoDetails />}>              
              </Route>
            </Routes>
          </div>
        </Layout>
        <div className="footer" >
          <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
            Cryptoverse<br />
            All Rights Reserved
          </Typography.Title>
          <Space>
            <Link to = '/'>Home</Link>
            <Link to = '/exchanges'>Exchanges</Link>
            <Link to = '/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
