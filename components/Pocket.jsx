import React from "react";

const data = [
  {
    hostname: "betterhumans.coach",
    url: "https://betterhumans.coach.me/how-to-powerhouse-through-sleep-deprivation-30c1d1c7247a",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F0%2Au52XKZLLApRvBMx3.&amp;resize=w450",
    title: "How to Powerhouse through Sleep Deprivation",
    description: "Sleep deprivation takes a sharp toll on the human brain and body, impairing cognition, motor ability, and mood. Willpower, memory, judgement, and attention all suffer. You drop and bump into things, crave sugar, overeat, and gain weight."
  },
  {
    hostname: "hbr",
    url: "https://hbr.org/2018/01/the-art-of-strategy-is-about-knowing-when-to-say-no",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fhbr.org%2Fresources%2Fimages%2Farticle_assets%2F2018%2F01%2Fjan18_11_Hayon-Thapaliya.jpg&amp;resize=w450",
    title: "The Art of Strategy Is About Knowing When to Say No",
    description: "When HubSpot was in its earliest stages, I used to say yes to almost anything: new features, new initiatives, new ideas. It empowered my team to move fast and get things done. I prided myself on being a “yes” man."
  },
  {
    hostname: "jalopnik",
    url: "https://jalopnik.com/how-goodyear-hid-evidence-of-the-worst-tire-made-in-his-1822200424",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fi.kinja-img.com%2Fgawker-media%2Fimage%2Fupload%2Fs--SsbDg86L--%2Fc_fit%2Cfl_progressive%2Cq_80%2Cw_636%2Fzlusnt0qqm2rabq6hoe5.jpg&amp;resize=w450",
    title: "How Goodyear Hid Evidence Of 'The Worst Tire Made In History' Linked To At Least 9 Deaths",
    description: "In October 2003, Billy Wayne Woods and his family packed into a luxury $181,000 motorhome for a fun getaway to Florida."
  },
  {
    hostname: "kottke",
    url: "https://kottke.org/18/01/if-you-watch-closely-enough-everything-is-a-speaker",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=http%3A%2F%2Fimg.youtube.com%2Fvi%2FFKXOucXB4a8%2F0.jpg&amp;resize=w450",
    title: "If you watch closely enough, everything is a speaker",
    description: "Using high speed cameras, it’s possible to record the vibrations of everyday objects caused by nearby sounds and reverse engineer the sounds…essentially turning anything that vibrates into a speaker."
  },
  {
    hostname: "themuse",
    url: "https://www.themuse.com/advice/career-lessons-learned-two-year-old-roommate",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fpilbox.themuse.com%2Fimage.jpg%3Furl%3Dhttps%253A%252F%252Fassets.themuse.com%252Fuploaded%252Fattachments%252F27160.jpg%253Fv%253D2e6c6e10afa9ad97eb83a924d67254a2c73962abcc0ff9ae0563de60b66c3ea8%26h%3D367&resize=w450",
    title: "8 Career Lessons I Learned From My Two-Year-Old Roommate",
    description: "To start, I’m not a parent. I opted in to a commune-style Brooklyn home I found on Craigslist, and I live with a young couple and their two-year-old, Ilya.  I’ve now been living there for one year and I can confidently say it’s one of the best decisions I’ve ever made."
  },
  {
    hostname: "imore",
    url: "https://www.imore.com/homepod-vs-amazon-echo-vs-google-home-max-vs-sonos-one-speaker-showdown",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=https%3A%2F%2Fwww.imore.com%2Fsites%2Fimore.com%2Ffiles%2Fstyles%2Fxlarge%2Fpublic%2Ffield%2Fimage%2F2017%2F06%2Fhomepod-white-shelf.jpg%3Fitok%3DmhEdPSwY&resize=w450",
    title: "HomePod vs. Amazon Echo vs. Google Home Max vs. Sonos One: Speaker showdown",
    description: "I am not — nor do I have much desire to be — an \"audiophile.\" I didn't study audio production in school. I don't have a multi-thousand dollar audio rig."
  },
  {
    hostname: "espn",
    url: "http://www.espn.com/nba/story/_/id/22258759",
    image: "https://img-getpocket.cdn.mozilla.net/direct?url=http%3A%2F%2Fa4.espncdn.com%2Fcombiner%2Fi%3Fimg%3D%252Fphoto%252F2017%252F0422%252Fr202069_1296x729_16%252D9.jpg%26w%3D1140%26cquality%3D40&resize=w450",
    title: "Lowe: This Blake Griffin trade might be a trap for 'super-mediocrity'",
    description: "Blake Griffin is an exquisitely skilled player in his prime."
  },
  {
    hostname: "forbes",
    url: "https://www.forbes.com/sites/piasilva/2018/01/24/9-5-is-out-try-the-1-6-instead/",
    image: "https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fblogs-images.forbes.com%2Fpiasilva%2Ffiles%2F2018%2F01%2FForbes-Cartoon-square-MASTER-61-1200x1200.jpg&resize=w450",
    title: "9-5 Is Out. Try The 1-6 Instead.",
    description: "I was raised to covet the early morning hours. I’ve spent my whole life thinking I was more “accomplished” the earlier I woke up. I got this idea directly from my parents by living in a home where everyone was “up and at ‘em” by 6 am, sometimes earlier."
  }
];


export const Pocket = props => {
  const storiesCount = props.rows * 3;
  const stories = data.slice(0, storiesCount);
  return <section className="collapsible-section normal-cards section animation-enabled">
    <div className="section-top-bar">
      <h3 className="section-title">
        <span className="click-target">
          <span className="icon icon-small-spacer icon-pocket"></span>
          <span>Recommended by Pocket</span>
          <span className="collapsible-arrow icon icon-arrowhead-down"></span>
        </span>
      </h3>
    </div>
    <div className="section-body">
      <ul className="section-list" style={{padding:0}}>
        {stories.map((site) => <Card {...site} />)}
      </ul>
    </div>
  </section>;
};

const Card = props => <li className="card-outer">
  <a href={props.url}>
    <div className="card">
      <div className="card-preview-image-outer">
        <div className="card-preview-image loaded" style={{backgroundImage: `url(${props.image})`}}></div>
      </div>
      <div className="card-details">
        <div className="card-host-name">{props.hostname}</div>
        <div className="card-text">
          <h4 className="card-title">{props.title}</h4>
          <p className="card-description">{props.description}</p>
        </div>
        <div className="card-context">
          <span className="card-context-icon icon icon-trending"></span>
          <div className="card-context-label">
            <span>Trending</span>
          </div>
        </div>
      </div>
    </div>
  </a>
</li>;
