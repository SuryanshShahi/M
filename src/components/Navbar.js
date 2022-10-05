import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/myntra.png";

function Navbar() {
  return (
    <section id="navbar">
      <nav
        className="navbar navbar-expand-lg fixed-top bg-white p-0 m-0 px-lg-5 px-md-5"
        style={{ boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)", zIndex: "997" }}
      >
        <div className="navbar-nav w-100 py-lg-3 py-2 px-3">
          <div className="align-items-center d-flex">
            <NavLink to="/">
              <img
                src={logo}
                className="img-fluid"
                style={{ width: "65px", height: "48px" }}
                // style={{ width: "80px", height: "50px" }}
              />
            </NavLink>

            <button
              className="navbar-toggler ml-auto border-0"
              style={{ outline: "none" }}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
            >
              <span className="fa fa-bars fa-lg"></span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse pl-lg-5"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav align-items-center d-flex mb-2 mb-lg-0 pl-3"
              style={{ width: "100%" }}
            >
            <li
            style={{ width: "fit-content", fontSize: "14px" }}
            className="nav-item px-2"
          >
            <NavLink to="/" className="nav-link text-dark font-weight-bold">
              MEN
            </NavLink>

                <div className="dropdown-menu menu rounded-0 border-0">
                  <div className="row pl-2 mr-2 pr-1">
                    <div className="col px-4 pt-2">
                      <li className="text-dark">
                        <b>Mobiles</b>
                      </li>
                      <li>Mi</li>
                      <li>Realme</li>
                    </div>
                    <div
                      className="col px-4 pt-2"
                      style={{
                        backgroundColor: "#f9f9f9",
                        backgroundSize: "cover",
                      }}
                    >
                      <li className="text-dark">
                        <b>Mobile Accessories</b>
                      </li>
                      <li>Mobile Cases</li>
                    </div>
                    <div
                      className="col px-4 pt-2 pb-3"
                      style={{ backgroundColor: "#f9f9f9" }}
                    >
                      <li>Televisions</li>
                    </div>
                    <div className="col px-4 pt-2">
                      <li className="text-dark">
                        <b>Featured</b>
                      </li>
                      <li>Google Assistant Store</li>
                    </div>
                  </div>
                </div>
              </li>

             
              <li
                style={{ width: "fit-content", fontSize: "14px" }}
                className="nav-item px-2"
              >
                <NavLink to="/" className="nav-link text-dark font-weight-bold">
                  WOMEN
                </NavLink>
              </li>
              <li
                style={{ width: "fit-content", fontSize: "14px" }}
                className="nav-item px-2"
              >
                <NavLink to="/" className="nav-link text-dark font-weight-bold">
                  KIDS
                </NavLink>
              </li>
              <li
                style={{ width: "fit-content", fontSize: "14px" }}
                className="nav-item px-2"
              >
                <NavLink to="/" className="nav-link text-dark font-weight-bold">
                  HOME & LIVING
                </NavLink>
              </li>
              <li
                style={{ width: "fit-content", fontSize: "14px" }}
                className="nav-item px-2"
              >
                <NavLink to="/" className="nav-link text-dark font-weight-bold">
                  BEAUTY
                </NavLink>
              </li>
              <li
                style={{ width: "fit-content", fontSize: "14px" }}
                className="nav-item px-2"
              >
                <NavLink
                  to="/"
                  className="nav-link text-dark font-weight-bold position-relative"
                >
                  STUDIO
                  <span className="position-absolute top-0 start-100 translate-middle badge text-danger">
                    NEW
                  </span>
                </NavLink>
              </li>

              <li className="nav-item searchbar pl-lg-5 w-50 pt-lg-0 pt-3">
                {" "}
                <form className="d-flex align-items-center pr-lg-4">
                  <div
                    className="fa fa-search pl-3"
                    style={{
                      zIndex: "1",
                      color: "#808080d4",
                      position: "absolute",
                    }}
                  ></div>
                  <input
                    className="form-control pl-5 me-2 position-relative w-100 border-0"
                    type="search"
                    placeholder="Search for products, brands and more"
                    aria-label="Search"
                    style={{ background: "rgb(241 241 241)" }}
                  />
                </form>
              </li>
            </ul>

            <div className="list-unstyled align-items-center justify-content-center py-lg-0 py-4 d-flex ml-lg-auto mb-2 mb-lg-0 d-flex">
              <div className="px-3" style={{ width: "fit-content" }}>
                <div className=" text-center">
                  <div className="fa fa-user-o" style={{fontSize:"17px"}}></div>
                  <div style={{ fontSize: "12px" }}>Profile</div>
                </div>
              </div>
              <div className="px-3" style={{ width: "fit-content" }}>
                <div className=" text-center">
                  <div className="fa fa-heart-o" style={{fontSize:"17px"}}></div>
                  <div style={{ fontSize: "12px" }}>WhishList</div>
                </div>
              </div>
              <div
                className="px-3 d-flex position-relative"
                style={{ width: "fit-content" }}
              >
                <NavLink
                  to={`/myntra/${1}/bag`}
                  className="fa fa-shopping-bag text-decoration-none text-dark"
                >
                  {" "}
                  <div className="text-center pt-2" style={{fontSize:"17px"}}>
                    <div style={{ fontSize: "12px" }}>Bag</div>
                  </div>
                </NavLink>
                <span
                  className="badge bg-danger position-absolute ml-3 mb-2"
                  style={{
                    fontSize: "12px",
                    height: "fit-content",
                    borderRadius: "50px",
                    top: "-5px",
                  }}
                >
                  1
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
