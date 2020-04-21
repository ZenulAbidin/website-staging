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

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div classname"page-header background-1">
           <Container>
             <div className="content-center brand">
               <h1 className="h1-seo">BLK• React</h1>
               <h3 className="d-none d-sm-block">
                 A beautiful Design System for Bootstrap 4 (reactstrap) and React.
                 It's Free and Open Source.
               </h3>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default PageHeader;
