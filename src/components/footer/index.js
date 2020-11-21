import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Copyright © {(new Date().getFullYear())} <strong>Jonathan Scarpelli</strong>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
