import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
           <a href="https://www.linkedin.com/in/scarcrux/?originalSubdomain=bd" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
          <a href="https://github.com/scarcrux" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="git" icon={faGithub} />
          </a>
          <a href="https://codepen.io/scarcrux/scarcrux" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="codepen" icon={faCodepen} />
          </a>
          <a href="https://twitter.com/scarcrux" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          </a>

         </Col>
  );
}

export default SocialIcons;
