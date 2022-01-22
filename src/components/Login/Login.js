import React, { useState } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
  }
  return(
    <div className="login-wrapper">
      <div className="container-fluid ps-md-0">
        <div className="row g-0">
          <div id="demo" className="carousel slide d-none d-md-flex col-md-4 col-lg-6" data-ride="carousel">
            <ul class="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/img/loterianina.jpg" alt="Los Angeles"/>
              </div>
              <div className="carousel-item">
                <img src="/img/loterianina2.jpg" alt="Chicago"/>
              </div>
              <div className="carousel-item">
                <img src="/img/loterianina3.jpg" alt="New York"/>
              </div>
            </div>
              <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a className="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            </div>
            <div className="col-md-8 col-lg-6">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto text-center">
                      <img src="/img/logo.jpeg" alt="Fiangonana Loterianina Malagasy (FLM)"/>
                      <h3 className="login-heading mb-4">Authentification</h3>
                      <form  onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                          <input type="text" className="form-control" id="floatingInput" placeholder="rakoto" onChange={e => setUserName(e.target.value)}/>
                          <label for="floatingInput">Nom </label>
                        </div>
                        <div class="form-floating mb-3">
                          <input type="password" className="form-control" id="floatingPassword" placeholder="**********" onChange={e => setPassword(e.target.value)}/>
                          <label for="floatingPassword">Mots de passe </label>
                        </div>
                        <div className="d-grid">
                          <button className="btn btn-lg btn-danger btn-login text-uppercase fw-bold mb-2" type="submit">S'authentifier</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}