import React from 'react';
import useLocalStorage from 'use-local-storage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faLinkedin, faTwitter, faApple } from '@fortawesome/free-brands-svg-icons';
import { faToggleOn, faHeart } from '@fortawesome/free-solid-svg-icons';

import './index.css';

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className="app" data-theme={theme}>
      <div className="login">
        <h1>Welcome back!</h1>
        <div className="container">
          <div className="top">
            <i><FontAwesomeIcon icon={faGoogle} /></i>
            <i><FontAwesomeIcon icon={faFacebook} /></i>
            <i><FontAwesomeIcon icon={faLinkedin} /></i>
            <i><FontAwesomeIcon icon={faTwitter} /></i>
            <i><FontAwesomeIcon icon={faApple} /></i>
          </div>
          <p className="divider"><span>or</span></p>
          <form action="">
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="Enter your email"/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter your password'/>
            <div className="remember">
              <input type="checkbox" checked="checked"/>
              <p>Remember me!</p>
            </div>
            <button>Login</button>
          </form>
          <div className="bottom">
            <p>Forgot your password?</p>
            <a href="/">Reset password</a>
          </div>
          <p className="create">Create account!</p>
        </div>
        <div className="theme-toggle">
          <h2>Mudar o tema: </h2>
          <i onClick={switchTheme}><FontAwesomeIcon icon={faToggleOn} /></i>
        </div>
      </div>
      <footer>
        <h6>© 2023. Made with <FontAwesomeIcon icon={faHeart} /> by Yasmin M.</h6>
      </footer>
    </div>
  )
}

export default App