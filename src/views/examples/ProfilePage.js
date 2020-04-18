/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
//import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "Big City Life, United States"
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Stocks, United States"
  }
];

let ps = null;


class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <div className="page-header" style={{"max-height": "none"}}>
            <img
              alt="..."
              className="dots"
              src={require("assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg={4} md={4} sm={2}>
                </Col>
                <Col lg={4} md={4} sm={8}>
                   <h1 className="text-center" style={{"margin-bottom": "150px"}}>About me</h1>
                  <Card className="ml-auto mr-auto" className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h4 className="title">Ali Sherief</h4>
                    </CardHeader>
                    <CardBody>
                  <p className="profile-description">
                    I'm a 20 year old developer based in Khartoum, Sudan. I do many things actually. From writing a missing
                    math library to drawing mediocre artwork to web design to writing to scraping and
                    curating datasets to 3D modelling, you'll find me anywhere there's
                    passion. I guess you could also call me a 10X developer because I do
                    the work that no one wants to do.
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/Zenul_Abidin"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow us
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="mailto:alihsherief@linuxmail.org"
                      id="tooltip982846143"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Send an email
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="stackoverflow"
                      href="https://stackoverflow.com/users/12452330/zenul-abidin"
                      id="tooltip951161185"
                      target="_blank"
                    >
                      <i className="fab fa-stack-overflow" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Developer credentials
                    </UncontrolledTooltip>
                  </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
            <div style={{"text-align": "center"}}>
              <h1 className="text-center">Skills</h1>
              <p className="profile-description" className="text-center text-padding">
                The technologies that I know like the back of my hand, in no particular order.
              </p>
              <Container className="align-items-center">
                <Row>
                  <Col lg={2} md={1} sm={1}>
                  </Col>
                  <Col lg={8} md={10} sm={10}>
                    <ListGroup>
                      <ListGroupItem color="default">C++</ListGroupItem>
                      <ListGroupItem color="default">Qt</ListGroupItem>
                      <ListGroupItem color="default">Python</ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="section">
           <div style={{"text-align": "center"}}>
              <h1 className="text-center">Milestones</h1>
              <p className="profile-description" className="text-center text-padding">
                Some of the more remarkable contributions I made and goals achieved for the betterment of mankind.
              </p>
              <Container className="align-items-center">
                <Row>
                  <Col lg={2} md={1} sm={1}>
                  </Col>
                  <Col lg={8} md={10} sm={10}>
                    <ListGroup>
                      <ListGroupItem color="warning">2020-04-12: Aggressively started learning React.js and reactstrap</ListGroupItem>
                      <ListGroupItem color="primary">2020-03-27: Initiated ZGLshapes project development</ListGroupItem>
                      <ListGroupItem color="success">2020-02-24: Completed HackerRank #30DaysofCode in <a href="https://www.hackerrank.com/alihsherief">six</a> languages</ListGroupItem>
                      <ListGroupItem color="success">2019-12-05: First DEV.to <a href="https://dev.to/zenulabidin/testing-less-variables-with-do-while-2p4o">blog post</a></ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="section">
           <div style={{"text-align": "center"}}>
              <h1 className="text-center">Projects</h1>
              <p className="profile-description" className="text-center text-padding">
                Here are some of the software projects I completed or am currently working on.
              </p>
            </div>
            <Container>
              <Row className="justify-content-between">
                <Col lg={4} md={4} sm={12}>
                  <Card className="ml-auto mr-auto" className="card-list card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h3 className="title">Foobar</h3>
                    </CardHeader>
                    <CardBody>
                      <p className="profile-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada dignissim purus, eu rhoncus tortor. Fusce commodo a erat ut egestas. In ultrices, augue ut dignissim facilisis, sapien metus laoreet justo, a posuere lectus lorem non turpis.
                      </p>
                      <div className="btn-wrapper pt-3">
                        <Button
                          className="btn-simple"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="tim-icons icon-book-bookmark" /> More info
                        </Button>
                        <Button
                          className="btn-simple"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="tim-icons icon-bulb-63" /> Check it!
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Card className="ml-auto mr-auto" className="card-list card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h3 className="title">Foobar II</h3>
                    </CardHeader>
                    <CardBody>
                      <p className="profile-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada dignissim purus, eu rhoncus tortor. Fusce commodo a erat ut egestas. In ultrices, augue ut dignissim facilisis, sapien metus laoreet justo, a posuere lectus lorem non turpis.
                      </p>
                      <div className="btn-wrapper pt-3">
                        <Button
                          className="btn-simple"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="tim-icons icon-book-bookmark" /> More info
                        </Button>
                        <Button
                          className="btn-simple"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="tim-icons icon-bulb-63" /> Check it!
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Card className="ml-auto mr-auto" className="card-list card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h3 className="title">Foobar III</h3>
                    </CardHeader>
                    <CardBody>
                      <p className="profile-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada dignissim purus, eu rhoncus tortor. Fusce commodo a erat ut egestas. In ultrices, augue ut dignissim facilisis, sapien metus laoreet justo, a posuere lectus lorem non turpis.
                      </p>
                      <div className="btn-wrapper pt-3">
                        <Button
                          className="btn-simple"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="tim-icons icon-book-bookmark" /> More info
                        </Button>
                        <Button
                          className="btn-simple"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="tim-icons icon-bulb-63" /> Check it!
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Card className="ml-auto mr-auto" className="card-list card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/mike.jpg")}
                      />
                      <h3 className="title">Foobar IV</h3>
                    </CardHeader>
                    <CardBody>
                      <p className="profile-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada dignissim purus, eu rhoncus tortor. Fusce commodo a erat ut egestas. In ultrices, augue ut dignissim facilisis, sapien metus laoreet justo, a posuere lectus lorem non turpis.
                      </p>
                      <div className="btn-wrapper pt-3">
                        <Button
                          className="btn-simple"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="tim-icons icon-book-bookmark" /> More info
                        </Button>
                        <Button
                          className="btn-simple"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="tim-icons icon-bulb-63" /> Check it!
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section">
           <div style={{"text-align": "center"}}>
              <h1 className="text-center">Contact</h1>
              <p className="profile-description" className="text-center text-padding">
                Get in touch using any of these communication methods
              </p>
            <Container>
          <Row className="row-grid align-items-center my-md">
            <Col lg="6">
              <h3 className="text-info font-weight-light mb-2">
                Thank you for visiting my site!
              </h3>
              <h4 className="mb-0 font-weight-light">
                Let's get in touch on any of these platforms.
              </h4>
            </Col>
            <Col className="text-lg-center btn-wrapper" lg="6">
              <Button
                className="btn-icon btn-round"
                color="twitter"
                id="contact-twitter"
                size="lg"
                href="https://twitter.com/Zenul_Abidin"
              >
                <i className="fab fa-twitter" />
              </Button>
              <Button
                className="btn-icon btn-round"
                color="email"
                id="contact-email"
                size="lg"
                href="mailto:alihsherief@linuxmail.org"
              >
                <i className="fab fa-envelope" />
              </Button>
              <Button
                className="btn-icon btn-round"
                color="discord"
                id="contact-discord"
                size="lg"
                href="https://discordhub.com/profile/660905245987307520"
              >
                <i className="fab fa-discord" />
              </Button>
              <Button
                className="btn-icon btn-round"
                color="github"
                href="https://github.com/ZenulAbidin"
                id="contact-github"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-github" />
              </Button>
              <Button
                className="btn-icon btn-round"
                color="bitcoin"
                href="https://bitcointalk.org/index.php?action=profile;u=2739424"
                id="contact-bitcoin"
                size="lg"
                target="_blank"
              >
                <i className="fab fa-bitcoin" />
              </Button>
              <UncontrolledTooltip placement="bottom" target="navbar-brand">
                Template by BLK• Design System React
              </UncontrolledTooltip>
            </Col>
          </Row>
            </Container>
          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
