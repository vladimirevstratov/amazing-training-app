import React, { useEffect } from 'react';
import Sider from '../sider';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './index.module.css';
import { appName } from '../../../constants/main';

interface MainLayoutProps {
  children: JSX.Element;
  title?: string;
  pageTitle?: string;
  pageDescription?: string;
}

const MainLayout = ({
  children,
  title,
  pageTitle,
  pageDescription,
}: MainLayoutProps) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${appName}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid={true}>
      <Row className={styles.container}>
        <Col md={3} className={styles.siderCol}>
          <Sider />
        </Col>
        <Col md={1} />
        <Col md={8}>
          <div className={styles.contentContainer}>
            <div className={styles.pageHeader}>
              <h1>{pageTitle}</h1>
              <span className={styles.description}>{pageDescription}</span>
            </div>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
