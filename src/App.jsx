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
        <h1>Bem-vindo!</h1>
        <div className="container">
          <div className="top">
            <i><FontAwesomeIcon icon={faGoogle} /></i>
            <i><FontAwesomeIcon icon={faFacebook} /></i>
            <i><FontAwesomeIcon icon={faLinkedin} /></i>
            <i><FontAwesomeIcon icon={faTwitter} /></i>
            <i><FontAwesomeIcon icon={faApple} /></i>
          </div>
          <p className="divider"><span>ou</span></p>
          <form action="">
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="Insira seu email"/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Insira sua senha"/>
            <div className="remember">
              <input type="checkbox" checked="checked"/>
              <p>Mantenha-me conectado!</p>
            </div>
            <button>Entrar</button>
          </form>
          <div className="bottom">
            <p>Esqueceu sua senha?</p>
            <a href="/">Redefinir senha</a>
          </div>
          <p className="create">Criar conta!</p>
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