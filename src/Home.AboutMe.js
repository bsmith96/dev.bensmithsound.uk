import './App.css';

function AboutMe() {
  return (
    <div className="container-fluid">
      <h1 className="mt-4 page-heading">About Me</h1>
      <div className="row justify-content-center">
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
            >Reaper</a> easier in a live theatre environment. I also learnt some simple web development for one-page sites, such as the one you're looking at right now!</p>
          <p>While live theatre remains a struggle for many creatives and venues, I am also available for work on <strong>recordings</strong> and broadcast events. Whether it’s <strong>editing</strong> and cleaning up recordings from zoom, <strong>mixing</strong> a performance remotely or as a livestream, or a creative <strong>sound design</strong> for a digital production.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;