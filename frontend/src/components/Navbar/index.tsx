import {ReactComponent as GithubIcon} from 'assets/img/github.svg'
import './styles.css';
function Navbar(){
    return(
        <header>
      <nav className='container'>
        <div className='dsmovie-nav-content'>
          <h1>DSMovie</h1>
          <a href='https://github.com/Eduardo-Amaral'>
            <div className='dsmovie-contact-container'>
              <GithubIcon></GithubIcon>
              <p className='dsmovie-contact-link'>/Eduardo-Amaral</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );
}

export default Navbar;