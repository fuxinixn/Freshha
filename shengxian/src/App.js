import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import Frech from "./Frech.js"
import Clothing from "./Clothing.js"
import Beauty_makeup from "./Beauty_makeup.js"
import Mother_infant from "./Mother_infant.js"
import Digital from "./Digital.js"
import Home_Furnishing from "./Home_Furnishing.js"


const AppRouter = () => (
  <Router>
    <div className="center">
      <nav>
        <ul className="nav">
          <li>
            <NavLink exact to="/">首页</NavLink>
          </li>
          <li>
            <NavLink to="/Frech">生鲜</NavLink>
          </li>
          <li>
            <NavLink to="/Clothing">服装</NavLink>
          </li>
           <li>
            <NavLink to="/Beauty_makeup">美妆</NavLink>
          </li>
          <li>
            <NavLink to="/Mother_infant">母婴</NavLink>
          </li>
          <li>
            <NavLink to="/Digital">数码</NavLink>
          </li>
          <li>
            <NavLink to="/Home_Furnishing">家居</NavLink>
          </li>
        </ul>
      </nav>

    <div className="section">
            <Route exact path="/" />
      <Route path="/Frech" component={Frech} />
      <Route path="/Clothing" component={Clothing} />
      <Route path="/Beauty_makeup" component={Beauty_makeup} />
      <Route path="/Mother_infant" component={Mother_infant} />
     <Route path="/Digital" component={Digital} />
    <Route path="/Home_Furnishing" component={Home_Furnishing} />
    </div>

    </div>
  </Router>
);

export default AppRouter;