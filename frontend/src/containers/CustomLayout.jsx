import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <a href="/"><h1 style={{ color: "#fff" }} >Restaurant Menu</h1></a>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div style={{ padding: "24px 0", minHeight: 84 + "vh" }}>
            {/* Here goes all the content */}
            {this.props.children}
            {/* Here goes all the content */}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Abdelaziz Abdelioua</Footer>
      </Layout>
    );
  }
}

export default CustomLayout;
