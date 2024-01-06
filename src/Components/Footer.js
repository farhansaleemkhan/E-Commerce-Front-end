import React from 'react';
import "./Style.css";

const Footer = () => {
  return (
    <div className="container-fluid bottom">
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          <p className="fs-3 fw-bold">LOCATION</p>
          <p className="fs-5">2215 John Daniel Drive Clark, MO 65243</p>
        </div>
        <div className="col">
          <p className="fs-3 fw-bold">AROUND THE WEB</p>
          <div className="ihover">
            <i className="fa-brands fa-facebook-f fs-5 rounded-circle icon"></i>
            <i className="fa-brands fa-twitter fs-5 rounded-circle icon"></i>
            <i className="fa-brands fa-linkedin fs-5 rounded-circle icon"></i>
            <i className="fa fa-globe fs-5 rounded-circle icon"></i>
          </div>
        </div>
        <div className="col">
          <p className="fs-3 fw-bold">ABOUT E-COMMERCE</p>
          <p className="fs-5">E-Commerce is website for selling items online.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
export default Footer;