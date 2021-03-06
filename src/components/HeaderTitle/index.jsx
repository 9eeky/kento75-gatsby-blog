import React, { Component } from "react";
import config from "../../../data/SiteConfig";
import "./headerTitle.scss";

class HeaderTitle extends Component {
  render() {
    return <a className="header-title" href="/">{config.headerTitle}</a>;
  }
}

export default HeaderTitle;
