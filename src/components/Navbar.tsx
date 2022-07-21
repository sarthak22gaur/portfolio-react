import githubIcon from '../Assets/github-icon.svg';
import linkedinIcon from '../Assets/linkedin-icon.svg';
import hamburgerOpen from '../Assets/hamburger-open.svg';
import hamburgerClose from '../Assets/hamburger-close.svg';
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <a className="logo" href="/">
          Sg.
        </a>
        <img
          id="mobile-menu"
          className="mobile-menu"
          src={hamburgerOpen}
          alt="Open Menu"
        ></img>
        <nav>
          <img
            id="mobile-close"
            className="close-menu"
            src={hamburgerClose}
            alt="Close menu"
          ></img>
          <ul className="main-nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Resume</a>
            </li>
          </ul>
          {/* <ul className="secondary-nav">
            <li>
              <a href="/">
                <img
                  src={githubIcon}
                  alt="Github"
                ></img>
              </a>
            </li>
            <li>
              <a href="/">
                <img
                  src={linkedinIcon}
                  alt="Linkedin"
                ></img>
              </a>
            </li>
          </ul> */}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
