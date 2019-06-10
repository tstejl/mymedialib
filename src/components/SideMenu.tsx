import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Empty } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const initialState = { collapsed: false };
type State = Readonly<typeof initialState>;

export default class SideMenu extends Component {
  readonly state: State = initialState;

  onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo"
            style={{
              height: "32px",
              background: "rgba(255, 255, 255, 0.2)",
              margin: "16px"
            }}
          />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="database" />
                  <span>Libraries</span>
                </span>
              }
            >
              <Menu.Item key="2">JDB</Menu.Item>
              <Menu.Item key="3">DLSITE</Menu.Item>
              <Menu.Item key="4">KDB</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Empty />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            <Icon type="github" style={{padding: '0 2px 0 0'}}/>
            {/* <a href="https://github.com/tstejl"> */}
              {"  Zhaoxuan Li  "}
              {/* </a> */}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}