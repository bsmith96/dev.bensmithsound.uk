import './App.css';
import HeadShot1 from './_images/BenSmith_PQ_2_Radio.jpg';
import HeadShot2 from './_images/BenSmith_PQ_1.jpg';

/*  S E L E C T  P H O T O  R A N D O M L Y  */
const headshots = [HeadShot1, HeadShot2];

var headshot = headshots[Math.floor(Math.random()*headshots.length)];

/*  R E N D E R  E L E M E N T  */
function AboutMe() {
  return (
    <div className="container-fluid">
      <h1 className="mt-3 page-heading-2 display-5">About Me</h1>
      <div className="row gy-3 mt-2 align-items-center">
        <div className="col-lg-3 d-none d-lg-block">
          <img src={headshot} className="img-fluid rounded shadow" alt="Ben Smith"></img>
        </div>
        <div className="col-lg-9">
          <h4 className="page-subheading text-start">Ben Smith<small className="text-muted"> (He/him)</small></h4>
          <p>I am a freelance theatre sound engineer based in SE London, working as a <strong>sound operator</strong> for musicals and plays: I have worked on Regional productions, National and International Tours, and in the West End. I am confident <strong>mixing musicals</strong>, including working with actor-musicians, click-tracks, and in large venues, as well as looking after backstage as a <strong>Sound No. 2</strong>.</p>
          <p>I also have experience in <strong>sound design</strong> for theatrical productions, concerts and live events.</p>
          {/*<p>I always strive to be adaptable, to take challenges in my stride and work with the entire production team to create the best possible result.</p>*/}
          <p>Recently, I have spent this period of lockdown refining my collection of <a 
            href="https://www.github.com/bsmith96/Qlab-Scripts"
            target="_blank"
            rel="noreferrer"
            className="text-reset"
          >
            scripts for Figure 53's Qlab</a>, as well as creating a few simple scripts to make working with <a
              href="https://www.github.com/bsmith96/Reaper-Scripts"
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >Reaper</a> easier in a live theatre environment, and a small application which allows you to remotely display the position of the playhead on a <a
              href="https://www.github.com/bsmith96/qlab-display"
              target="_blank"
              rel="noreferrer"
              className="text-reset"
            >remote Qlab cue list</a>. I also learnt some simple web development for one-page sites, such as the one you're looking at right now!</p>
          <p>While live theatre remains a struggle for many creatives and venues, I am also available for work on <strong>recordings</strong> and broadcast events, whether it’s <strong>editing</strong> and cleaning up recordings from zoom, <strong>mixing</strong> a performance remotely or as a livestream, or a creative <strong>sound design</strong> for a digital production.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;