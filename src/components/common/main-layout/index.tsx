import React, { useEffect } from 'react';
import Sider from '../sider';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './index.module.css';
import { appName } from '../../../constants/main';

interface MainLayoutProps {
  children: JSX.Element;
  title?: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${appName}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
