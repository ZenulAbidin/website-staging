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
import ReactDOM from "react-dom";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Description from "views/IndexSections/Description.js";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }

  componentDidUpdate() {
      let hash = this.props.location.hash.replace('#', '');
      if (hash) {
          let node = ReactDOM.findDOMNode(this.refs[hash]);
          if (node) {
              node.scrollIntoView();
          }
      }
  }

  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <Description />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
