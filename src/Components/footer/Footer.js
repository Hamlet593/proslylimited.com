import React from "react";
import "./style.css";

const Footer = () => (
  <footer className="page-footer font-small blue">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 mt-md-0 mt-3">
          <h2> Prosly Limited</h2>
          <p> Suite C, Level 7, World Trust Tower, 50 Stanley Street, Central, Hong Kong</p>
          <p>Email: info@proslylimited.com</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2024 Copyright: ProslyLimited
    </div>
  </footer>
);

export default Footer;
