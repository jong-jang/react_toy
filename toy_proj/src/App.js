import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css'
import { BrowserRouter ,Routes, Route, Link} from 'react-router-dom'
import Todos from './components/todos/Todos';
import News from './components/news/News';
import Gallery from './components/gallery/Gallery';
import Drow from './components/drow/Drow';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <BrowserRouter>
        <Layout className="layout">
          <Header>
            <Link to="/"><div className="logo" /></Link>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key='1'><Link to='Todos'>Todos</Link></Menu.Item>
              <Menu.Item key='2'><Link to='News'>News</Link></Menu.Item>
              <Menu.Item key='3'><Link to='Gallery'>Gallery</Link></Menu.Item>
              <Menu.Item key='3'><Link to='Drow'>Drow</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>연습용 프로젝트</Breadcrumb.Item>
            </Breadcrumb>
            <Routes>
              <Route className="site-layout-content" path='/' />
              <Route className="site-layout-content" path='/Todos' element={<Todos />} />
              <Route className="site-layout-content" path='/News' element={<News />} />
              <Route className="site-layout-content" path='/Gallery' element={<Gallery />} />
              <Route className="site-layout-content" path='/Drow' element={<Drow />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>학습용 입니다.</Footer>
        </Layout>
        </BrowserRouter>
      );
};

export default App;