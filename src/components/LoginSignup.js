import React, { useEffect } from "react";
import loginImg from "./images/loginSignUp.webp";

function LoginSignup() {
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
          className="bg-white mx-3"
          style={{ maxWidth: "400px", height: "80vh" }}
        >
          <img src={loginImg} className="img-fluid w-100" />
          <div className="p-5">
            <div style={{ fontSize: "16px", color: "#535766" }}>
              <b style={{ color: "#424553", fontSize: "20px" }}>Login</b> or{" "}
              <b style={{ color: "#424553", fontSize: "20px" }}>Signup</b>
            </div>
            <form action="/createAccount" className="position-relative mt-4">
              <div className="align-items-center d-flex">
                <div
                  className="pl-2"
                  style={{
                    zIndex: "1",
                    color: "#808080d4",
                    position: "absolute",
                  }}
                >
                  +91 |{" "}
                </div>
                <input
                  className="form-control shadow-none rounded-0 w-100"
                  type="tel"
                  placeholder="Mobile Number"
                  pattern="[0-9]{10}"
                  style={{ height: "40px", paddingLeft: "54px" }}
                  required
                />
              </div>
              <label
                className="my-3"
                style={{ fontSize: "13px", color: "rgba(40,44,63,.8)" }}
              >
                By continuing, I agree to the{" "}
                <a
                  href=""
                  className="text-decoration-none"
                  style={{ color: "#ff3c6f", fontWeight: "600" }}
                >
                  Terms of Use
                </a>{" "}
                &{" "}
                <a
                  href=""
                  className="text-decoration-none"
                  style={{ color: "#ff3c6f", fontWeight: "600" }}
                >
                  Privacy Policy
                </a>
              </label>
              <button
                type="submit"
                className="btn btn-danger border-0 rounded-0 w-100 my-2 py-2"
                style={{ background: "rgb(255, 63, 108)", fontWeight: "700" }}
              >
                CONTINUE
              </button>
              <div
                className="mt-4"
                style={{ color: "rgba(40,44,63,.8)", fontSize: "13px" }}
              >
                Have trouble logging in?{" "}
                <span
                  className=""
                  style={{ color: "#ff3c6f", fontWeight: "600" }}
                >
                  Get help
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
