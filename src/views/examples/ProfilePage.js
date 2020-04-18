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
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
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
                <Col lg={4} md={6}>
                </Col>
                <Col lg={4} md={6}>
                   <h1 className="text-center" style={{"margin-bottom": "150px"}}>About me</h1>
                  <Card className="ml-auto mr-auto" className="card-coin card-plain" style={{"margin-top": "100px"}}>
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
                    I'm a developer based in Khartoum, Sudan. I do many things actually. From writing a missing
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
            <Container className="align-items-center">
              <Row>
                <Col lg={4} md={6}>
                </Col>
                <Col lg={4} md={6}>
                  <h1 className="text-center">Projects</h1>
                  <p className="profile-description text-left">
                    Here are some of the software projects I completed or am currently working on.
                  </p>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="justify-content-between">
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="tim-icons icon-book-bookmark" /> Bookmark
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
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section">
            <Container>
              <Row>
                <Col md="6">
                  <Card className="card-plain">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact</h1>
                      <h5 className="text-on-back">03</h5>
                    </CardHeader>
                    <CardBody>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default ProfilePage;
