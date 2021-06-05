import React from "react";
import Sider from "../sider";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./index.module.css";

interface MainLayoutProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Container fluid={true}>
      <Row className={styles.container}>
        <Col lg={3} className={styles.siderCol}>
          <Sider />
        </Col>
        <Col lg={9}>{children}</Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
