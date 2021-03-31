import './App.css';

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a 
          className="navbar-brand"
          href="#"
        >
          <i className="bi-soundwave"></i> Ben Smith Sound
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="mailto:ben@bensmithsound.uk" target="_blank" rel="noreferrer">Email Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="files/Ben_Smith_Sound_CV.pdf" target="_blank" rel="noreferrer">Download my CV</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Useful Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="https://www.github.com/bsmith96/Qlab-Scripts" target="_blank" rel="noreferrer">Qlab Scripts</a></li>
                <li><a className="dropdown-item" href="https://www.github.com/bsmith96/Reaper-Scripts" target="_blank" rel="noreferrer">Reaper Scripts</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-block">
          <a href="https://twitter.com/bensmith_96" target="_blank" rel="noreferrer">
            <img
              src="images/other-icons/Twitter social icons - circle - white.png"
              height="32px" 
              className="mx-1"
              alt="Twitter logo"
            />
          </a>
          <a href="https://github.com/bsmith96" target="_blank" rel="noreferrer">
            <img
              src="images/other-icons/GitHub-Mark-Light-64px.png"
              height="32px"
              className="mx-1"
              alt="Github logo"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;