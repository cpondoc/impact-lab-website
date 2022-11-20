// Necessary React Dependencies
import * as React from "react"
import Accordion from 'react-bootstrap/Accordion';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/index.css';

// Lab Images
import Icon from '../images/icon.png'
import KingCenter from '../images/king-center.png'
import PovertyCenter from '../images/poverty-center.jpeg'
import NaturalCapital from '../images/natural-capital.png'
import LawSchool from '../images/law-school.png'

// Team Images
import Chris from '../images/pondoc.jpeg'
import Phil from '../images/phil.png'

const IndexPage = () => {
  return (
    <div className="container">
      <img id="logo" src={Icon} alt="CS+SG Logo"/>
      <h1>Impact Lab
        <br />
        <h3>Helping promote equity and access to undergraduate research</h3>
      </h1>
      <p>The Impact Lab, created by CS+Social Good, aims to build a community of undergraduate researchers conducting socially-impactful research. We seek to provide students with faculty mentorship, community, and relevant resources that enable effective social impact-related technical research projects. Our central initiative is the Research Exposure Program, which directs committed undergraduates to social-impact-focused research groups. The CS+Social Good Impact Lab is supported by the Stanford Institute for Human-Centered AI.</p>
      <br />
      <div className="row">
        <div className="col-sm">
          <img className="icons" src={KingCenter} alt="King Center"/>
        </div>
        <div className="col-sm">
          <img className="icons" src={PovertyCenter} alt="Poverty Center"/>
        </div>
        <div className="col-sm">
          <img className="icons" src={NaturalCapital} alt="Natural Capital Project"/>
        </div>
        <div className="col-sm">
          <img className="icons" src={LawSchool} alt="Stanford Law School"/>
        </div>
      </div>
      <br />
      <h3 className="header">How to Apply
        <br />
        <p>Below are some answers to frequently asked questions about applying to Impact Lab.</p>
      </h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header><p className="accordion-header">What does the Impact Lab Application process look like?</p></Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Fill out our Google Form application by December 17th</li>
              <li>Wait for lab matches, which will be emailed over winter break.</li>
              <li>If accepted by a lab, get excited and welcome to Impact Lab!</li>
              <li>Once you receive your match make sure to reach out to your lab.</li>
              <li>Get ready for weekly Impact Lab meetings starting winter quarter.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><p className="accordion-header">What does the research process look like?</p></Accordion.Header>
          <Accordion.Body>
            <ul>
                <li>The research process varies from lab to lab, but students will typically get started by going through a training program specific to their role.</li>
                <li>From there, students may be asked to engage in a variety of tasks, including data analysis, needs finding, and software/application development.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header><p className="accordion-header">What level of experience do I need?</p></Accordion.Header>
          <Accordion.Body>
            <ul>
                <li>No prior research/technical experience is necessary!</li>
                <li>We expect Impact Lab to be students’ first research experience, so don’t feel discouraged to apply if you haven’t taken part in research before.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header><p className="accordion-header">Will I get compensated for my work?</p></Accordion.Header>
          <Accordion.Body>
            <ul>
                <li>Students can receive academic credit for all projects, but some labs do offer paid positions as well.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header><p className="accordion-header">What kind of support does Impact Lab give?</p></Accordion.Header>
          <Accordion.Body>
            <ul>
                <li>Impact Lab meets every week to support the research cohort! We do activities such as: research skills workshops, speaker panels, movie/TV screenings, and other fun CS/research related things!</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <h3 className="header">Timeline
        <br />
        <p>Below are some key dates:</p>
        <p><b><u>November 18:</u></b> Applications Open</p>
        <p><b><u>December 17:</u></b> Applications Close</p>
        <p><b><u>Winter Break:</u></b> Decisions Released</p>
      </h3>
      <br />
      <h3 className="header">Team
        <br />
        <p>Here's the team helping run Impact Lab this year!</p>
      </h3>
      <div className="row">
        <div className="col-sm">
          <img className="icons" src={Chris} alt="Chris Pondoc"/>
          <p>Chris Pondoc</p>
        </div>
        <div className="col-sm">
          <img className="icons" src={Phil} alt="Phil Bailargeron"/>
          <p>Phil Bailargeron</p>
        </div>
        <div className="col-sm">
        </div>
        <div className="col-sm">
        </div>
      </div>
      <br />
      <h3 className="header">Contact
        <br />
        <p>Have any questions? Reach out to Impact Lab Co-Leads Christopher Pondoc (clpondoc@stanford.edu) or Phil Bailargeron (pabaill@stanford.edu) if you have any questions!</p>
      </h3>
      <br />
      <div className="col-sm">
        <p>Website maintained by <a href="http://chrispondoc.com/">Chris Pondoc</a>. Code available on <a href="https://github.com/cpondoc/impact-lab-website">Github</a>.</p>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home | Impact Lab</title>
