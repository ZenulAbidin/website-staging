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
// plugin that creates slider
import Slider from "nouislider";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocus: false
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="section section-basic" id="basic-elements">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <Container>
          <h3 className="title text-center">Welcome to my site. Have a look around.</h3>
          <h2 className="text-center">Site Links</h2>
          <Column>
            <Row>
            <Col md="8">
              <Button color="link">Default</Button>
              <Button className="btn-link" color="primary">
                Primary
              </Button>
              <Button className="btn-link" color="info">
                Info
              </Button>
              <Button className="btn-link" color="success">
                Success
              </Button>
              <Button className="btn-link" color="warning">
                Warning
              </Button>
              <Button className="btn-link" color="danger">
                Danger
              </Button>
              <Button className="btn-link" color="neutral">
                Neutral
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Description;
