import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About"
import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    const [CurrentRoute, setCurrentRoute] = useState()

    useEffect(() => {
        const path = window.location.pathname.toLowerCase()
        setCurrentRoute(path.slice(1, path.length))
    }, [])

    return (
      <BrowserRouter>
          <div className="m-0 p-0">
              <nav className="p-3 navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="/">jobme</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                          <li>
                              <a>
                                  <Link
                                      onClick={() => setCurrentRoute("/")}
                                      className={CurrentRoute === '/' ? 'btn btn-primary' : 'btn btn-link'}
                                      to={"/"}>
                                    Home
                                  </Link>
                              </a>

                          </li>
                          <li >
                              <a>
                                  <Link
                                      onClick={() => setCurrentRoute("about")}
                                      className={CurrentRoute === 'about' ? 'btn btn-primary' : 'btn btn-link'}
                                      to={"/about"}>
                                      About
                                  </Link>
                              </a>
                          </li>
                          <li >
                              <a>
                                  <Link
                                      onClick={() => setCurrentRoute("jobs_v2")}
                                      className={CurrentRoute === 'jobs_v2' ? 'btn btn-primary' : 'btn btn-link'}
                                      to={"/jobs_v2"}>
                                      version 2 beta
                                  </Link>
                              </a>
                          </li>
                      </ul>
                  </div>
              </nav>


          </div>
          <Routes>
              <Route path={"/"} element={<Home />}></Route>
              <Route path={"/about"} element={<About />}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
