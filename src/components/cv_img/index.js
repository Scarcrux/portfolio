import React, { Component } from 'react';
import '../cv_img/style.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Frontend from '../../assets/img/frontend.svg';
import Backend from '../../assets/img/backend.svg';
import Xp from '../../assets/img/xp.svg';
import {
  Col,
  Row,
  Card,
  Button,
  Image
} from 'react-bootstrap';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class CRI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <section class="section skills has-text-centered">
      <div class="container is-narrow">
        <p className="aboutme">I got my start in web design and development from creating and maintaining gaming fan sites as a kid. Since then, I've become interested in all aspects of software engineering. The programming languages I'm focusing on mastering are Python and JavaScript.</p>
        <div class="box">
          <div class="content">
            <div class="columns is-centered">
              <div class="column">
                <figure class="image">              <FontAwesomeIcon icon={faPalette} className="left_icon" /></figure>
                <h1 class="title is-size-4 is-spaced">Front-end Developer</h1>
                <p>I create a seamless user experience across different devices, OSs and browsers.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Languages I Speak:</p>
                <p>JavaScript, HTML, CSS</p>
                <p class="list-title has-text-primary has-text-weight-normal">Tools:</p>
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Git</li>
                  <li>Material</li>
                  <li>Bootstrap</li>
                  <li>VS Code</li>
                  <li>WordPress</li>
                </ul>
              </div>
              <div class="column">
                <figure class="image"><FontAwesomeIcon icon={faCode} className="left_icon" /></figure>
                <h1 class="title is-size-4 is-spaced">Back-end Developer</h1>
                <p>I build and maintain the server side back-end capable of supporting a scalable website.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p>Python, Java, SQL</p>
                <p class="list-title has-text-primary has-text-weight-normal">Tools:</p>
                <ul>
                  <li>Flask</li>
                  <li>Django</li>
                  <li>Express</li>
                  <li>Sequelize</li>
                  <li>PostgreSQL</li>
                  <li>NoSQL</li>
                  <li>Sprint Boot</li>
                </ul>
              </div>
              <div class="column">
                <figure class="image"><FontAwesomeIcon icon={faLaptopCode} className="left_icon" /></figure>
                <h1 class="title is-size-4 is-spaced">Experience</h1>
                <p>I've been working on coding projects since middle school and plan to continue until retirement.</p>
                <p class="list-title has-text-primary has-text-weight-normal">Degree:</p>
                <p>Brooklyn College, BS in CS</p>
                <p class="list-title has-text-primary has-text-weight-normal">Work:</p>
                <ul>
                  <li>Business Websites</li>
                  <li>School Websites</li>
                  <li>Library Websites</li>
                  <li>Degree Planner</li>
                  <li>Math Tutor</li>
                  <li>Gaming Fan Sites</li>
                  <li>Automating Digitization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
