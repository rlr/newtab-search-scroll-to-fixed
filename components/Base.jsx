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
    const SCROLL_THRESHOLD = 34;
    const HEIGHT_THRESHOLD = 700;
    window.addEventListener('scroll', function(e) {
      if (window.innerHeight <= HEIGHT_THRESHOLD) {
        return;
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
