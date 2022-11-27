import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import create from "./images/createAcc.png";

function LoginSignup() {
  window.scroll(0, 0);
  useEffect(() => {
    document.getElementById("footer").style.display = "none";
    document.getElementById("loginProfileIcon").style.display = "none";
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div>
      <div className="backdrop" id="backdrop">
        .
      </div>
      <div
        className="justify-content-center align-items-center mt-lg-5 mt-4 d-flex"
        style={{ height: "100vh", background: "rgb(255 192 203 / 30%)" }}
      >
        <div
          className="bg-white p-4 mx-3"
          style={{ maxWidth: "400px", height: "fit-content" }}
        >
          <img src={create} className="img-fluid w-100" />
          <div
            className="text-center my-3 mt-4"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            Already have an account?
          </div>
          <NavLink to="/gmail" className="text-decoration-none">
            <div
              className="btn btn-danger rounded-0 align-items-center mb-2 d-flex justify-content-center w-100 fa fa-google bg-transparent"
              style={{
                color: "#ff3f6c",
                height: "45px",
                transition: "0.5s",
                fontSize: "14px",
                fontWeight: "500",
                border: "1px solid #eaeaec",
              }}
            >
              <span className="text-dark pl-2">GOOGLE</span>
            </div>
          </NavLink>
          <NavLink to="/login" className="text-decoration-none">
            <div
              className="btn btn-danger rounded-0 text-dark align-items-center d-flex justify-content-center w-100 fa fa-envelope-o bg-transparent"
              style={{
                height: "45px",
                transition: "0.5s",
                fontSize: "14px",
                fontWeight: "500",
                border: "1px solid #eaeaec",
              }}
            >
              <span className="text-dark pl-2">LOGIN WITH EMAIL</span>
            </div>
          </NavLink>
          <div className="d-flex my-4 align-items-center">
            <hr style={{ color: "#A9ABB3", width: "48%" }}></hr>
            <div
              className="mx-2"
              style={{ color: "#A9ABB3", fontSize: "12px" }}
            >
              OR
            </div>
            <hr style={{ color: "#A9ABB3", width: "48%" }}></hr>
          </div>
          <div
            className="text-center"
            style={{ fontWeight: "600", fontSize: "18px" }}
          >
            New to Myntra?
          </div>
          <NavLink to="/login" className="text-decoration-none">
            <div
              className="btn btn-danger rounded-0 my-3 text-dark align-items-center d-flex justify-content-center w-100 fa fa-user-o bg-transparent"
              style={{
                height: "45px",
                transition: "0.5s",
                fontSize: "14px",
                fontWeight: "500",
                border: "1px solid #eaeaec",
              }}
            >
              <span className="text-dark pl-2">CREATE NEW ACCOUNT</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
