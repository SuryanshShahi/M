import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "./images/myntra.png";
import app from "./images/downloadApp.jpeg";

function Navbar() {
  const [isactive, setActive] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const changeNav = () => {
      if (window.innerWidth >= 575) {
        setActive(false);
      } else {
        setActive(true);
      }
    };
    window.addEventListener("resize", changeNav);
    changeNav();
  }, []);

  return (
    <section id="navbar">
      {!isactive ? (
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
                <span className="fa fa-bars fa-lg text-dark"></span>
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
                  <NavLink
                    to="/"
                    className="nav-link text-dark font-weight-bold"
                  >
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
                  <NavLink
                    to="/"
                    className="nav-link text-dark font-weight-bold"
                  >
                    WOMEN
                  </NavLink>
                </li>
                <li
                  style={{ width: "fit-content", fontSize: "14px" }}
                  className="nav-item px-2"
                >
                  <NavLink
                    to="/"
                    className="nav-link text-dark font-weight-bold"
                  >
                    KIDS
                  </NavLink>
                </li>
                <li
                  style={{ width: "fit-content", fontSize: "14px" }}
                  className="nav-item px-2"
                >
                  <NavLink
                    to="/"
                    className="nav-link text-dark font-weight-bold"
                  >
                    HOME & LIVING
                  </NavLink>
                </li>
                <li
                  style={{ width: "fit-content", fontSize: "14px" }}
                  className="nav-item px-2"
                >
                  <NavLink
                    to="/"
                    className="nav-link text-dark font-weight-bold"
                  >
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
                    <div
                      className="fa fa-user-o"
                      style={{ fontSize: "17px" }}
                    ></div>
                    <div style={{ fontSize: "12px" }}>
                      <b>Profile</b>
                    </div>
                  </div>
                </div>
                <div className="px-3" style={{ width: "fit-content" }}>
                  <div className=" text-center">
                    <div
                      className="fa fa-heart-o"
                      style={{ fontSize: "17px" }}
                    ></div>
                    <div style={{ fontSize: "12px" }}>
                      <b>WhishList</b>
                    </div>
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
                    <div className="text-center font-weight-bold pt-2">
                      <div style={{ fontSize: "12px" }}>
                        <b>Bag</b>
                      </div>
                    </div>
                  </NavLink>
                  <span
                    className="badge bg-danger position-absolute ml-3 mb-2"
                    style={{
                      fontSize: "10px",
                      height: "fit-content",
                      borderRadius: "50px",
                      top: "-5px",
                      left: "11px",
                    }}
                  >
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav
          className="navbar navbar-expand-lg fixed-top bg-white p-0 m-0 px-lg-5"
          style={{ boxShadow: "0 4px 12px 0 rgb(0 0 0 / 5%)", zIndex: "997" }}
        >
          <div>
            {show ? (
              <div className="openModal" style={{ height: "100vh" }}>
                <div
                  className="drawer bg-white position-absolute"
                  id="drawer"
                  style={{
                    height: "100vh",
                    width: "80vw",
                    top: 0,
                    zIndex: 1,
                    overflowY: "scroll",
                  }}
                >
                  <div className="p-3" style={{ background: "#272027fa" }}>
                    <div className="d-flex">
                      <div
                        className="fa fa-user-o fa-lg rounded bg-white shadow-lg"
                        style={{ height: "fit-content", padding: "12px" }}
                      ></div>
                      <div
                        className="ml-auto fa-2x pt-2 text-white"
                        onClick={() => setShow(false)}
                        style={{ lineHeight: "0", marginRight: "-4px" }}
                      >
                        &times;
                      </div>
                    </div>
                    <div className="d-flex align-items-center pt-2">
                      <div className="text-white shadow-lg">Nikhil</div>
                      <div className="ml-auto fa fa-angle-right text-white"></div>
                    </div>
                  </div>

                  <div className="" style={{ fontSize: "15px" }}>
                    <div
                      className="px-3"
                      style={{ fontWeight: "600", color: "black" }}
                    >
                      <div
                        className="d-flex align-items-center py-2"
                        style={{ fontWeight: "500" }}
                      >
                        Men
                        <div className="ml-auto">
                          <span
                            className="fa fa-angle-right"
                            style={{ color: "grey" }}
                          ></span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center py-2"
                        style={{ fontWeight: "500" }}
                      >
                        Women
                        <div className="ml-auto">
                          <span
                            className="fa fa-angle-right"
                            style={{ color: "grey" }}
                          ></span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center py-2"
                        style={{ fontWeight: "500" }}
                      >
                        kids
                        <div className="ml-auto">
                          <span
                            className="fa fa-angle-right"
                            style={{ color: "grey" }}
                          ></span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center py-2"
                        style={{ fontWeight: "500" }}
                      >
                        Home & Living
                        <div className="ml-auto">
                          <span
                            className="fa fa-angle-right"
                            style={{ color: "grey" }}
                          ></span>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center py-2"
                        style={{ fontWeight: "500" }}
                      >
                        Beauty
                        <div className="ml-auto">
                          <span
                            className="fa fa-angle-right"
                            style={{ color: "grey" }}
                          ></span>
                        </div>
                      </div>
                    </div>
                    <hr className="m-0 my-2"></hr>
                    <div className="px-3" style={{ color: "black" }}>
                      <div className="py-2">Account</div>
                      <div className="py-2">Orders</div>
                      <div className="py-2">
                        Myntra Studio{" "}
                        <span
                          className="rounded-pill bg-transparent btn btn-danger text-danger px-2 p-0"
                          style={{ fontSize: "8px" }}
                        >
                          <b>NEW</b>
                        </span>
                      </div>
                      <div className="py-2">
                        Myntra Mall{" "}
                        <span
                          className="rounded-pill bg-transparent btn btn-danger text-danger px-2 p-0"
                          style={{ fontSize: "8px" }}
                        >
                          <b>NEW</b>
                        </span>
                      </div>
                      <div className="py-2">Myntra Insider</div>
                      <div className="py-2">Gift Cards</div>
                      <div className="py-2">Contact Us</div>
                      <div className="py-2">FAQs</div>
                      <div className="pt-2 pb-3">Legal</div>
                    </div>
                    <img src={app} className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="navbar-nav w-100 py-lg-3 px-3">
            <div className="align-items-center d-flex">
              <div
                className="fa fa-bars fa-md pr-3"
                style={{ fontSize: "18px" }}
                onClick={() => setShow(true)}
              ></div>
              <div style={{ fontWeight: "500", fontSize: "18px" }}>Myntra</div>
              <div className="list-unstyled ml-auto align-items-center justify-content-center d-flex">
                <div className="px-2" style={{ width: "fit-content" }}>
                  <div className=" text-center">
                    <div
                      className="fa fa-bookmark-o"
                      style={{ fontSize: "18px" }}
                    ></div>
                  </div>
                </div>
                <div className="px-2" style={{ width: "fit-content" }}>
                  <div className=" text-center">
                    <div
                      className="fa fa-search"
                      style={{ fontSize: "18px" }}
                    ></div>
                  </div>
                </div>
                <div className="px-2" style={{ width: "fit-content" }}>
                  <div className=" text-center">
                    <div
                      className="fa fa-heart-o"
                      style={{ fontSize: "18px" }}
                    ></div>
                  </div>
                </div>
                <div
                  className="px-2 d-flex position-relative"
                  style={{ width: "fit-content" }}
                >
                  <NavLink
                    to={`/myntra/${1}/bag`}
                    className="fa fa-shopping-bag text-decoration-none text-dark"
                    style={{ fontSize: "18px" }}
                  ></NavLink>
                  <span
                    className="badge bg-danger position-absolute ml-3 mb-2"
                    style={{
                      fontSize: "8px",
                      height: "fit-content",
                      borderRadius: "50px",
                      top: "-3px",
                      left: "3px",
                    }}
                  >
                    1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )}
    </section>
  );
}
export default Navbar;
