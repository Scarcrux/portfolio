import React from 'react';
import '../home_right/style.css';
import Foad from '../../assets/img/2-Man-holds-the-program-code.jpg';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import SocialIcons from '../social_icons';

function Home_Right() {
  return (
    <Container className="home-right">
      <Row  className="home-right-main">
        <Col xs={12} className="d-flex justify-content-center align-items-center">
          <br />
          <Image src={Foad} className="home-right-main-img" alt="Avatar Holding Code" style={{width:"500px"}}/>
        </Col>
        <Row className="home-right-footer" >
          <Col xs={12}><SocialIcons />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Home_Right;
