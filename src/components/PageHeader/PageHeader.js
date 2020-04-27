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
import React, {useState} from "react";

// reactstrap components
import { Container, Progress } from "reactstrap";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import ChangingProgressProvider from "./ChangingProgressProvider";

let captions=[
"Insert catchphrase here.",
"Borg was here.",
]


class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      percentage: 10
    };
  }

  componentDidMount() {
    const timer = setInterval(() => {
      this.setState({percentage: this.state.percentage+10}
      if (this.state.percentage === 100) {
        this.setState({percentage: 10, index: (this.state.index+1) % captions.length})
      }}, 200);
    return () => clearInterval(timer);
    }

  render() {
    return (
      <div className="page-header header-filter">
        <div className="page-header background-1">
           <Container>
             <div className="content-center brand">
               <h1 className="h1-seo">I am <b>Ali Sherief</b>,</h1>
               <h3 className="d-sm-block">
                 {captions[this.state.index]}
               </h3>
               <div style={{display: "flex", flexDirection: "column"}}>
                 <div style={{ alignSelf: "center", width: "10%" }}>
                   <Progress value=`${this.state.percentage}` />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default PageHeader;
