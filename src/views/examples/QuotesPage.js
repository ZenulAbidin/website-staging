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


class QuotesPage extends React.Component {
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
    document.body.classList.toggle("quotes-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("quotes-page");
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
            <div style={{"text-align": "center"}}>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h1 className="text-center">Miscellaneous quotes</h1>
              <Container>
                <Row>
                  <Col sm="2" md="4" lg="4">
                  </Col>
                  <Col sm="auto" md="auto" lg="auto">
                    <p className="profile-description" className="text-center text-padding blockquote blockquote-info">
                      &#8220;Disclaimer: I&apos;m not responsible if these quotes drive you mad,
                      if so, what are you doing on this site anyway?&#8221; - Ali Sherief
                    </p>
                    <p className="profile-description" className="text-center text-padding blockquote blockquote-info">
                      &#8220;Unstoppable.&#8221; - Ali Sherief
                    </p>
                    <p className="profile-description" className="text-center text-padding blockquote blockquote-info">
                      &#8220;The most powerful programmers are the ones who manage to turn a math algorithm
                      into an implementation, and I admire the brilliance of those who manage to do
                      that.&#8221; - Ali Sherief
                    </p>
                    <p className="profile-description" className="text-center text-padding blockquote blockquote-info">
                      &#8220;Bitcoin is the best thing since sliced bread.&#8221; - Ali Sherief
                    </p>
                    <p className="profile-description" className="text-center text-padding blockquote blockquote-info">
                      &#8220;Ignorance is a mighty weapon.&#8221; - Ali Sherief
                    </p>
                    <p className="profile-description" className="text-center text-padding blockquote blockquote-info">
                      &#8220;Perhaps one day these quotes will become famous with me.&#8221; - Ali Sherief
                    </p>
                    <p className="profile-description" className="text-center text-padding blockquote blockquote-info">
                      &#8220;There is the inherently selfish response of ‘I have nothing to hide’. Well it is
                      true that I am not ill. It is true that I am not blind. But I still want to live in a world
                      that has hospitals. I still want to live on a street that has accessibility for blind people.
                      And it is also the case that I want to live in a world where everyone has privacy, thus dignity,
                      confidentiality and integrity in their daily lives, without having to ask for it, to beg it from a master.
                      Because it is the case that when you ask someone for those things, they may not grant them. And then you will know
                      that you are not free.&#8221; - Jacob Appelbaum
                    </p>
                  </Col>
                  <Col sm="2" md="4" lg="4">
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default QuotesPage;
