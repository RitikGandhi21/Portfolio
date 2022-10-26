import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import {
  Col,
  Container,
} from 'react-bootstrap';

import githubFill from '@iconify-icons/akar-icons/github-fill';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import leetcodeIcon from '@iconify-icons/cib/leetcode';
import codechefIcon from '@iconify-icons/simple-icons/codechef';
import geeksforgeeksIcon from '@iconify-icons/simple-icons/geeksforgeeks';
import { Icon } from '@iconify/react';

const Platforms = () => {
  return (
    <Container className="platformcont">
      <Col>
        <ul className="home-platforms-social-links">
          <li className="social-icons">
            <a
              href="https://github.com/RitikGandhi21"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="GitHub"
            >
              <Icon
                icon={githubFill}
                height={32}
                width={32}
                style={{ marginBottom: 8 }}
              />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.codechef.com/users/gandhiji21"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="CodeChef"
            >
              <Icon
                icon={codechefIcon}
                height={32}
                width={32}
                style={{ marginBottom: 8 }}
              />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://leetcode.com/gandhiji21/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="LeetCode"
            >
              <Icon
                icon={leetcodeIcon}
                height={28}
                width={28}
                style={{ marginBottom: 8 }}
              />
            </a>
          </li>
          <li className="social-icons">
            <a
              href="https://www.linkedin.com/in/ritik-gandhi/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-platforms-icons"
              title="LinkedIn"
            >
              <Icon
                icon={linkedinFill}
                height={30}
                width={30}
                style={{ marginBottom: 8 }}
              />
            </a>
          </li>
        </ul>
      </Col>
    </Container>
  );
};

export default Platforms;
