import './App.css';

function UsefulResources() {
  return(
    <div className="container-fluid">
      <h1 className="mt-5 page-heading">Useful Resources</h1>
      <div className="row justify-content-center">
        <div className="col-lg-9 mt-2">
          <h2 className="page-subheading">
            <a
              href="https://www.github.com/bsmith96/Qlab-Scripts/"
              target="_blank"
              rel="noreferrer"
              className="text-reset text-decoration-none"
            >
              Qlab Scripts
            </a>
          </h2>
          <p>This is a collection of scripts for Figure 53's Qlab show control software. I started out working with scripts which have been shared freely online, and evolved into editing these scripts, and more recently creating brand new scripts to automate parts of my workflow.</p>
          <p>Some scripts are meant for regular use while programming (such as level bumps, creating fades for cues, and creating mixing desk recall midi cues). Some scripts are intended for one-off use (such as creating line-check cues, or updating the crosspoints of all programmed cues). A few scripts are very specifically designed for my workflow ("choose desk to program" and "speaker polarity check" specifically), so unless you recreate my qlab template directly, these may not be as useful. However, they could still be useful if you would like to adapt them!</p>
          
          <h2 className="page-subheading">
            <a
              href="https://www.github.com/bsmith96/Reaper-Scripts/"
              target="_blank"
              rel="noreferrer"
              className="text-reset text-decoration-none"
            >
              Reaper Scripts
            </a>
          </h2>
          <p>These are scripts for streamlining your workflow with the cross-platform DAW 'Reaper', particularly with a focus on multitrack recording in the context of live events, such as theatre.</p>
        </div>
      </div>
    </div>
  );
}

export default UsefulResources;