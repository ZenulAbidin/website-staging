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

// reactstrap components
import { Container } from "reactstrap";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import ChangingProgressProvider from "./ChangingProgressProvider";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="page-header background-1">
           <Container>
             <div className="content-center brand">
               <h1 className="h1-seo">I am <b>Ali Sherief</b>,</h1>
               <h3 className="d-sm-block">
                 Insert catchphrase here.
               </h3>
               <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
                 {percentage => (
                   <CircularProgressbar
                    value={percentage}
                    text={''}
                    styles={buildStyles({
                      pathTransitionDuration: 0.15
                    })}
                  />
                )}
            </ChangingProgressProvider>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default PageHeader;
