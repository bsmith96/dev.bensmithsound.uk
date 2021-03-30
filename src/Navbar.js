import './App.css';
import './_images/open-iconic/font/css/open-iconic-bootstrap.css';

function Navbar() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a 
          class="navbar-brand"
          href="#"
        >
          <span
            class="oi oi-headphones"
            title="headphones"
            aria-hidden="true"
          ></span> Ben Smith Sound
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mailto:ben@bensmithsound.uk" target="_blank" rel="noreferrer">Email Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="_files/Ben_Smith_Sound_CV.pdf" target="_blank" rel="noreferrer">Download my CV</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Useful Resources
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="https://www.github.com/bsmith96/Qlab-Scripts" target="_blank" rel="noreferrer">Qlab Scripts</a></li>
                <li><a class="dropdown-item" href="https://www.github.com/bsmith96/Reaper-Scripts" target="_blank" rel="noreferrer">Reaper Scripts</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="d-none d-lg-block">
          <a href="https://twitter.com/bensmith_96" target="_blank" rel="noreferrer">
            <img
              src="_images/other-icons/Twitter social icons - circle - white.png"
              height="32px" 
              class="mx-1"
              alt="Twitter logo"
            />
          </a>
          <a href="https://github.com/bsmith96" target="_blank" rel="noreferrer">
            <img
              src="_images/other-icons/GitHub-Mark-Light-64px.png"
              height="32px"
              class="mx-1"
              alt="Github logo"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;