import React from "react";

import {Search} from "./Search";
import {TopSites} from "./TopSites";
import {Pocket} from "./Pocket";
import {Highlights} from "./Highlights";

export class Base extends React.PureComponent {
  constructor(props) {
    super(props);
    this.searchFixed = false;
  }
  componentDidMount() {
    let SCROLL_THRESHOLD = 34;
    if (window.innerHeight)
    window.addEventListener('scroll', function(e) {
      let SCROLL_THRESHOLD = 34;
      if (window.innerHeight <= 700) {
        SCROLL_THRESHOLD = 0;
      }
      if (window.scrollY > SCROLL_THRESHOLD && !this.searchFixed) {
        document.body.className = "fixed-search";
        this.searchFixed = true;
      } else if (window.scrollY <= SCROLL_THRESHOLD && this.searchFixed) {
        document.body.className = "";
        this.searchFixed = false;
      }
    });
  }
  render() {
    return (<div className="outer-wrapper">
      <main>
        <Search />
        <TopSites rows={1} />
        <div className="sections-list">
          <Pocket rows={2} />
          <Highlights />
        </div>
      </main>
    </div>);
  }
}
