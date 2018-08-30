import React from "react";

const data = [
  {
    label: "youtube",
    url: "https://www.youtube.com/",
    image: "https://m.youtube.com/yts/mobile/img/apple-touch-icon-144x144-precomposed-vflopw1IA.png"
  },
  {
    label: "facebook",
    url: "https://www.facebook.com/",
    image: "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/58f-pmGQqDv.png"
  },
  {
    label: "amazon",
    url: "https://www.amazon.com/",
    image: "https://images-na.ssl-images-amazon.com/images/G/01/anywhere/a_smile_196x196._CB368246573_.png"
  },
  {
    label: "reddit",
    url: "https://www.reddit.com/",
    image: "https://www.redditstatic.com/mweb2x/favicon/192x192.png"
  },
  {
    label: "wikipedia",
    url: "https://www.wikipedia.org/",
    image: "https://www.wikipedia.org/static/apple-touch/wikipedia.png"
  },
  {
    label: "twitter",
    url: "https://twitter.com/",
    image: "https://abs-0.twimg.com/responsive-web/web/ltr/icon-ios.a9cd885bccbcaf2f.png"
  },
  {
    label: "yahoo",
    url: "https://yahoo.com",
    image: "https://s.yimg.com/dh/ap/default/130909/y_200_a.png"
  },
  {
    label: "msn",
    url: "https://msn.com",
    image: "https://static-global-s-msn-com.akamaized.net/hp-eus/sc/fc/2ba87e.png"
  },
  {
    label: "twitch",
    url: "https://twitch.tv",
    image: "https://m.twitch.tv/apple-touch-icon.png"
  },
  {
    label: "github",
    url: "https://github.com",
    image: "https://github.com/apple-touch-icon-180x180.png"
  },
  {
    label: "ok",
    url: "https://ok.ru",
    image: "https://m.ok.ru/mres/img/browser-theme/oklogo.png"
  },
  {
    label: "paypal",
    url: "https://paypal.com",
    image: "https://www.paypalobjects.com/webstatic/icon/pp196.png"
  },
  {
    label: "tumblr",
    url: "https://tumblr.com",
    image: "https://assets.tumblr.com/images/apple-touch-icon-228x228.png?_v=d255ff972a31f03a6adc23f3677e7223"
  },
  {
    label: "chase",
    url: "https://chase.com",
    image: "https://www.chase.com/etc/designs/chase-ux/favicon-152.png"
  },
  {
    label: "microsoftonline",
    url: "https://microsoftonline.com",
    image: "https://secure.aadcdn.microsoftonline-p.com/ests/2.1.7039.18/content/images/favicon_a.ico"
  },
  {
    label: "espn",
    url: "https://espn.com",
    image: "http://a.espncdn.com/wireless/mw5/r1/images/bookmark-icons/espn_icon-152x152.min.png"
  },
  {
    label: "pinterest",
    url: "https://pinterest.com",
    image: "https://s.pinimg.com/webapp/style/images/logo_180-f06edffd.png"
  },
  {
    label: "bbc",
    url: "https://bbc.com",
    image: "http://static.bbci.co.uk/wwhp/1.119.0/responsive/img/apple-touch/apple-touch-180.jpg"
  },
  {
    label: "soundcloud",
    url: "https://soundcloud.com",
    image: "https://mobi.sndcdn.com/assets/images/sc-icons/iphone@2x-9c79c761.png"
  }
];

export const TopSites = props => {
  const topSitesCount = props.rows * 8;
  const topSites = data.slice(0, topSitesCount);
  let placeholderCount = topSitesCount - topSites.length;
  let placeholders = [];
  if (placeholderCount > 0) {
    placeholders = new Array(placeholderCount).fill(undefined);
  }
  return <section className="collapsible-section top-sites">
    <div className="section-top-bar">
      <h3 className="section-title">
        <span className="click-target">
          <span className="icon icon-small-spacer icon-topsites"></span>
          <span>Top Sites</span>
          <span className="collapsible-arrow icon icon-arrowhead-down"></span>
        </span>
      </h3>
    </div>
    <div className="section-body">
      <ul className="top-sites-list">
        {topSites.map((site) => <TopSite {...site} />)}
        {placeholders.map(() => <TopSite />)}
      </ul>
    </div>
  </section>;
};

const TopSite = props => <li className={`top-site-outer${props.url ? "" : " placeholder"}`}>
  <div className="top-site-inner">
    <a href={props.url}>
      <div className="tile">
        <div className="top-site-icon rich-icon" style={{"backgroundImage": `url(${props.image})`}}></div>
        {props.label === "amazon" &&
          <div class="top-site-icon search-topsite"></div>
        }
      </div>
      <div className="title">
        <span>{props.label}</span>
      </div>
    </a>
    <div>
      <button class="context-menu-button icon"></button>
    </div>
  </div>
</li>;
