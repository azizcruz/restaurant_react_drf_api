import React from "react";
import { Layout, PageHeader } from "antd";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <h1 style={{ color: "#fff" }} >Restaurant Menu</h1>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ padding: "24px 0", minHeight: 84 + "vh" }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Abdelaziz Abdelioua</Footer>
      </Layout>
    );
  }
}

export default CustomLayout;
