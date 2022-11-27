import React from "react";
import { userProfile } from "../Data/Data";
import address from "./images/profile-address.png";
import cards from "./images/profile-cards.png";
import collections from "./images/profile-collections.png";
import coupons from "./images/profile-coupons.png";
import edit from "./images/profile-edit.png";
import credit from "./images/profile-myntra-credit.png";
import orders from "./images/profile-orders.png";
import upiIcon from "./images/upiIcon.png";
import points from "./images/profile-myntrapoints.png";
import creditImg from "./images/creditImg.png";
import upi from "./images/upi.png";
import StarsRating from "stars-rating";

function Profile() {
  window.scroll(0, 0);
  return (
    <section>
      <div className="backdrop" id="backdrop">
        .
      </div>
      <div
        className="container-lg container-fluid"
        id="userProfile"
        style={{ marginTop: "170px" }}
      >
        <div className="mt-3" style={{ borderBottom: "1px solid #8080804d" }}>
          <div style={{ fontWeight: "700", fontSize: "19px" }}>Account</div>
          <div className="mb-3" style={{ fontSize: "12px" }}>
            User
          </div>
        </div>
        <div className="d-flex">
          <div
            className="nav nav-tabs list-unstyled d-block pt-4"
            style={{ width: "20vw", borderRight: "1px solid #8080804d" }}
          >
            <li
              className="active tab"
              href="#overview"
              data-toggle="tab"
              type="button"
            >
              Overview
            </li>
            <hr className="my-4 mr-5"></hr>
            <div
              className="my-3"
              style={{ color: "#7e818c", fontSize: "12px" }}
            >
              ORDERS
            </div>
            <li className="tab" href="#orders" data-toggle="tab" type="button">
              Orders & Returns
            </li>
            <hr className="my-4 mr-5"></hr>
            <div
              className="my-3"
              style={{ color: "#7e818c", fontSize: "12px" }}
            >
              CREDITS
            </div>
            <li className="tab" href="#coupons" data-toggle="tab" type="button">
              Coupons
            </li>
            <li
              className="tab py-1"
              href="#credit"
              data-toggle="tab"
              type="button"
            >
              Myntra Credit
            </li>
            <li className="tab" href="#myncash" data-toggle="tab" type="button">
              MynCash
            </li>
            <hr className="my-4 mr-5"></hr>
            <div
              className="my-3"
              style={{ color: "#7e818c", fontSize: "12px" }}
            >
              ACCOUNT
            </div>
            <li
              className="tab py-1"
              href="#profile"
              data-toggle="tab"
              type="button"
            >
              Profile
            </li>
            <li className="tab" href="#cards" data-toggle="tab" type="button">
              Saved Cards
            </li>
            <li
              className="tab py-1"
              href="#vpa"
              data-toggle="tab"
              type="button"
            >
              Saved VPA
            </li>
            <li className="tab" href="#address" data-toggle="tab" type="button">
              Addresses
            </li>
            <li
              className="tab pt-1"
              href="#insider"
              data-toggle="tab"
              type="button"
            >
              Myntra Insider
            </li>
            <hr className="my-4 mr-5"></hr>
            <div
              className="my-3"
              style={{ color: "#7e818c", fontSize: "12px" }}
            >
              LEGAL
            </div>
            <li className="tab" href="#address" data-toggle="tab" type="button">
              Terms of Use
            </li>
            <li
              className="tab pt-1"
              href="#insider"
              data-toggle="tab"
              type="button"
            >
              Privacy Policy
            </li>
          </div>

          <div className="m-4 w-100">
            <div className="tab-content">
              <div id="overview" className="active tab-pane w-100">
                <div
                  className="d-flex"
                  style={{ padding: "35px", background: "#eee" }}
                >
                  <div
                    className="fa fa-user bg-dark justify-content-center d-flex align-items-end"
                    style={{
                      fontSize: "110px",
                      color: "#eee",
                      height: "130px",
                      width: "130px",
                    }}
                  ></div>
                  <div
                    className="btn btn-transparent ml-auto"
                    style={{
                      fontSize: "12px",
                      border: "1px solid black",
                      height: "fit-content",
                      fontWeight: "500",
                    }}
                  >
                    EDIT PROFILE
                  </div>
                </div>
                <div className="row gx-0">
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center pr-lg-2 pr-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={orders}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        Orders
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        Check your order status
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center px-lg-2 px-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={collections}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        Collections & Wishlist
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        All your curated products collections
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center pl-lg-2 pl-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={credit}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        Myntra Credit
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        Manage aur your refunds & gift cards
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center pr-lg-2 pr-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={points}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        MynCash
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        Earn MynCash as you shop and use them in checkout
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center px-lg-2 px-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={cards}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        Saved Cards
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        Save your card for faster checkout
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center pl-lg-2 pl-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={upiIcon}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        Saved VPA
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        View your saved VPA
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center pr-lg-2 pr-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={address}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        Addresses
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        Save addresses for a hassle-free checkout
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center px-lg-2 px-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={coupons}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        Coupons
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        Manage coupons for additional discounts
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-6 align-items-center d-flex justify-content-center pl-lg-2 pl-md-2 pt-3">
                    <div
                      className="text-center py-5 overviewCards"
                      style={{ border: "1px solid #8080804d", width: "100%" }}
                    >
                      <img
                        src={edit}
                        className="img-fluid mb-4"
                        style={{ width: "40px" }}
                      />
                      <div style={{ fontSize: "15px", fontWeight: "500" }}>
                        Profile Details
                      </div>
                      <div style={{ fontSize: "12px", color: "#94969F" }}>
                        Change your profile details & passwords
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div
                    className="btn btn-danger border-0 w-25 my-2 py-3"
                    style={{ background: "rgb(255, 63, 108)" }}
                  >
                    <b>LOGOUT</b>
                  </div>
                </div>
              </div>
              <div id="orders" className="tab-pane fade">
                <div
                  className="d-flex p-3 align-items-center"
                  style={{
                    backgroundImage: "linear-gradient(270deg,#f9daff,#dfefff)",
                  }}
                >
                  <div className="">
                    <div style={{ fontWeight: "500" }}>MYNTRA INSIDER</div>
                    <div style={{ fontSize: "12px" }}>
                      Earn 10 insider points for every ₹ 100 purchase
                    </div>
                  </div>
                  <div
                    className="btn btn-danger p-0 align-items-center d-flex px-2 ml-auto"
                    style={{
                      height: "28px",
                      fontWeight: "500",
                      fontSize: "12px",
                      lineHeight: "0",
                    }}
                  >
                    Enroll Now
                  </div>
                </div>
                <div className="d-flex p-3">
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "600" }}>
                      All Orders
                    </div>
                    <div style={{ fontSize: "14px" }}>from anytime</div>
                  </div>
                  <div className="d-flex align-items-center mr-3 position-relative ml-auto">
                    <div
                      className="fa fa-search pl-3"
                      style={{
                        zIndex: "1",
                        color: "#808080d4",
                        position: "absolute",
                      }}
                    ></div>
                    <input
                      className="form-control pl-5 shadow-none position-relative w-100"
                      type="search"
                      style={{ height: "45px" }}
                      placeholder="Search in orders"
                      aria-label="Search"
                    />
                    <div
                      className="btn btn-dark bg-transparent text-dark align-items-center ml-3 d-flex"
                      style={{ height: "45px", borderColor: "#ced4da" }}
                    >
                      <span className="fa fa-sliders fa-lg pr-2"></span>
                      <span style={{ fontWeight: "500" }}>Filter</span>
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-3" style={{ background: "#f5f5f5" }}>
                  <div className="pt-3">
                    <div className="bg-white p-3">
                      <div className="d-flex align-items-center">
                        <div
                          className="fa fa-dropbox text-white align-items-center d-flex justify-content-center bg-dark fa-lg"
                          style={{
                            borderRadius: "50%",
                            height: "50px",
                            width: "50px",
                          }}
                        ></div>
                        <div className="pl-3">
                          <div
                            className="text-info"
                            style={{ fontWeight: "500" }}
                          >
                            Delivered
                          </div>
                          <div className="" style={{ fontSize: "14px" }}>
                            On Tue, 15 Nov |{" "}
                            <img src="https://myntraweb.blob.core.windows.net/selfserveui/assets/svg/mexpress-tag.svg" />
                          </div>
                        </div>
                      </div>

                      <div
                        className="mt-4 deliveredCard"
                        style={{ background: "#f5f5f5", transition: "0.3s" }}
                      >
                        <div className="d-flex p-3 align-items-center">
                          <img
                            src={collections}
                            style={{ height: "70px", width: "53px" }}
                          />
                          <div className="pl-4">
                            <div>Roadster</div>
                            <div>Men Grey Solid Padded Jacket</div>
                            <div>Size: M</div>
                          </div>
                          <div className="fa fa-angle-right fa-2x ml-auto"></div>
                        </div>
                        <div className="d-flex pb-3">
                          <div
                            className="btn btn-dark bg-white text-dark mx-3"
                            style={{ borderColor: "#ced4da", width: "100%" }}
                          >
                            EXCHANGE
                          </div>
                          <div
                            className="btn btn-dark bg-white text-dark mx-3"
                            style={{ borderColor: "#ced4da", width: "100%" }}
                          >
                            RETURN
                          </div>
                        </div>
                      </div>

                      <div
                        className="d-flex px-3 align-items-center"
                        style={{ background: "#f5f5f5", marginTop: "2px" }}
                      >
                        <div style={{ color: "#696e79" }}>Rate Product</div>
                        <StarsRating
                          className="float-lg-right pl-3 mb-1 sliderRate justify-content-center d-flex"
                          count={5}
                          onChange={(e) => console.log(e)}
                          size={35}
                          color2={"rgb(255, 63, 108)"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="coupons" className="tab-pane fade">
                <div
                  className="mt-3"
                  style={{
                    boxShadow: "0 0 4px rgb(40 44 63 / 8%)",
                    border: "1px solid #EAEAEC",
                  }}
                >
                  <div
                    className="d-flex mx-3"
                    style={{ borderBottom: "1px solid #8080804d" }}
                  >
                    <div
                      className="px-5 py-4"
                      style={{
                        color: "#14cda8",
                        fontSize: "16px",
                        borderRight: "1px solid #8080804d",
                      }}
                    >
                      <div style={{ fontWeight: "500", fontSize: "18px" }}>
                        50%
                      </div>
                      <div style={{ fontSize: "20px", fontWeight: "700" }}>
                        OFF
                      </div>
                    </div>
                    <div className="p-3" style={{ color: "#696e79" }}>
                      <div>On minimum purchase of Rs. 0</div>
                      <div>
                        Code: <span style={{ color: "black" }}>BBWOFF</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 d-flex" style={{ color: "#696e79" }}>
                    <div>
                      Expiry:{" "}
                      <span style={{ fontWeight: "500" }}>NOV 27 2022</span>{" "}
                      12:05:13 P.M
                    </div>
                    <div
                      className="ml-auto"
                      style={{ fontWeight: "600", color: "#526cd0" }}
                    >
                      Details
                    </div>
                  </div>
                </div>
              </div>
              <div id="credit" className="tab-pane fade">
                <div>
                  <img
                    src={creditImg}
                    style={{
                      boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)",
                      width: "100%",
                    }}
                  />
                  <div
                    className="p-4 mt-3"
                    style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)" }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: "500" }}>
                      TOP-UP YOUR MYNTRA CREDIT NOW!
                    </div>
                    <div style={{ fontSize: "30px", fontWeight: "700" }}>
                      {" "}
                      ₹0.00
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div
                        className="text-center col-6"
                        style={{ borderRight: "1px solid #8080804d" }}
                      >
                        <div style={{ fontSize: "13px", color: "#A9ABB3" }}>
                          For a quick checkout
                        </div>
                        <div
                          style={{
                            color: "#526cd0",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          TOP UP
                        </div>
                      </div>
                      <div className="text-center col-6">
                        <div style={{ fontSize: "13px", color: "#A9ABB3" }}>
                          Have a gift card?
                        </div>
                        <div
                          style={{
                            color: "#526cd0",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          ADD GIFT CARD
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="p-3 mt-3"
                    style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)" }}
                  >
                    <div style={{ fontWeight: "500", fontSize: "12px" }}>
                      TRANSACTION LOG
                    </div>
                  </div>
                  <div
                    className="p-3 mt-3"
                    style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)" }}
                  >
                    <div style={{ fontWeight: "500", fontSize: "12px" }}>
                      CREDIT DETAILS
                    </div>
                  </div>
                  <div
                    className="p-3 mt-3"
                    style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)" }}
                  >
                    <div style={{ fontSize: "13px", fontWeight: "500" }}>
                      PLEASE NOTE
                    </div>
                    <ul
                      className="mt-2"
                      style={{ fontSize: "13px", color: "#3e4152" }}
                    >
                      <li>
                        Myntra Credit can't be cancelled or transferred to
                        another account.
                      </li>
                      <li>
                        It can't be withdrawn in the form of cash or transferred
                        to any bank account.
                      </li>
                      <li>It can't be used to purchase Gift Cards.</li>
                      <li>
                        Net-banking and credit/debit cards issued in India can
                        be used for Myntra Credit top up.
                      </li>
                      <li>
                        Credits have an expiry. Check FAQs for more details.
                      </li>
                    </ul>
                    <div className="row">
                      <div
                        className="col-4 text-center"
                        style={{
                          color: "#526cd0",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        MYNTRA CREDIT T&C >
                      </div>
                      <div
                        className="col-4 text-center"
                        style={{
                          color: "#526cd0",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        GIFT CARD T&C >
                      </div>
                      <div
                        className="col-4 text-center"
                        style={{
                          color: "#526cd0",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        FAQS >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="myncash" className="tab-pane fade">
                e1
              </div>

              <div id="profile" className="tab-pane fade ">
                <div
                  className="justify-content-center d-flex py-5"
                  style={{ border: "1px solid #8080804d", width: "100%" }}
                >
                  <div className="w-75">
                    <div
                      className="mb-4 mx-5"
                      style={{ fontWeight: "700", fontSize: "20px" }}
                    >
                      Profile Details
                    </div>
                    <hr style={{ color: "#808080fa" }}></hr>
                    <div className="mt-5 mx-5">
                      {userProfile.map((e) => {
                        return (
                          <div style={{ fontSize: "16px" }}>
                            <div className="d-flex text-dark mb-4" key={e.id}>
                              <div>{e.Field}</div>
                              <div className="ml-auto">{e.value}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mx-5 mt-5">
                      <div
                        className="btn btn-danger border-0 rounded-0 w-100 my-2 py-3"
                        style={{ background: "rgb(255, 63, 108)" }}
                      >
                        <b>EDIT</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="cards" className="tab-pane fade">
                <div className="justify-content-center d-flex">
                  <div className="text-center">
                    <img src={cards} className="py-5" />
                    <div
                      className="pb-4"
                      style={{ fontSize: "15px", fontWeight: "500" }}
                    >
                      SAVE YOUR CREDIT/DEBIT CARDS DURING PAYMENT
                    </div>
                    <div
                      className="justify-content-center d-flex"
                      style={{
                        color: "#A9ABB3",
                        fontSize: "16px",
                      }}
                    >
                      <div className="w-50">
                        It's convenient to pay with saved cards. Your card
                        information will be secure, we use 128-bit encryption
                      </div>
                    </div>
                    <div
                      className="d-flex align-items-center"
                      style={{ marginTop: "150px" }}
                    >
                      <hr style={{ color: "#A9ABB3", width: "40%" }}></hr>
                      <div
                        className="mx-3"
                        style={{ color: "#A9ABB3", fontSize: "12px" }}
                      >
                        MYNTRA SECURED
                      </div>
                      <hr style={{ color: "#A9ABB3", width: "40%" }}></hr>
                    </div>
                    <img
                      className="my-3"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
                    />
                  </div>
                </div>
              </div>
              <div id="vpa" className="tab-pane fade p-4 pt-3">
                <div className="row gx-0">
                  <div
                    className="mb-5 pl-2"
                    style={{ fontWeight: "700", fontSize: "18px" }}
                  >
                    Saved VPA
                  </div>
                  <div className="col-4 px-2">
                    <div
                      className="p-3 rounded"
                      style={{ boxShadow: "0px 1px 3px rgb(40 44 63 / 30%)" }}
                    >
                      <div className="d-flex align-items-center mb-3">
                        <div
                          className="fa fa-google align-items-center d-flex justify-content-center mr-2"
                          style={{
                            height: "36px",
                            borderRadius: "50%",
                            width: "38px",
                            fontSize: "12px",
                            border: "1px solid rgb(169 171 179 / 42%)",
                          }}
                        >
                          &nbsp;Pay
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "12px" }}>
                          xyz@gmail.com
                        </div>
                        <img
                          className="ml-auto"
                          style={{ height: "17px" }}
                          src={upi}
                        />
                      </div>
                      <div style={{ color: "#A9ABB3", fontSize: "11px" }}>
                        ACCOUNT HOLDER
                      </div>
                      <div style={{ fontSize: "14px" }}>Mr/Ms XYZ</div>
                      <hr></hr>
                      <div
                        className="text-center"
                        style={{ fontWeight: "600", color: "#FF3F6C" }}
                      >
                        REMOVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="address" className="tab-pane fade">
                <div className="d-flex">
                  <div
                    className="mb-5 pl-2"
                    style={{ fontWeight: "700", fontSize: "18px" }}
                  >
                    Saved Addresses
                  </div>
                  <div
                    className="btn btn-dark bg-transparent px-3 py-2 ml-auto"
                    style={{
                      color: "#526cd0",
                      border: "0.5px solid #d4d5d9",
                      fontWeight: "600",
                      height: "fit-content",
                    }}
                  >
                    + ADD NEW ADDRESS
                  </div>
                </div>
                <div style={{ fontWeight: "500", fontSize: "13px" }}>
                  DEFAULT ADDRESS
                </div>
                <div
                  className="py-3 mt-3"
                  style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)" }}
                >
                  <div className="d-flex px-3">
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      UserName
                    </div>
                    <div
                      className="rounded-pill btn btn-dark border-0 text-dark p-0 px-2 ml-auto"
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        background: "#F5F5F6",
                      }}
                    >
                      HOME
                    </div>
                  </div>
                  <div className="p-3 pt-2" style={{color:"#696E79"}}>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    <br></br>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa<br></br>aaaaaaaaaaaaaaaaaaaaa
                    <br></br>aaaaaaaa

                    <div className="pt-2">Mobile: xxxxxxxxxx</div>
                  </div>
                  <hr></hr>
                  <div className="row">
                    <div
                      className="text-center col-6"
                      style={{ borderRight: "1px solid #8080804d" }}
                    >
                      <div
                        style={{
                          color: "#526cd0",
                          fontWeight: "500",
                          fontSize: "16px",
                        }}
                      >
                        EDIT
                      </div>
                    </div>
                    <div className="text-center col-6">
                      <div
                        style={{
                          color: "#526cd0",
                          fontWeight: "500",
                          fontSize: "16px",
                        }}
                      >
                        REMOVE
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4" style={{ fontWeight: "500", fontSize: "13px" }}>
                  OTHER ADDRESSES
                </div>
                <div
                  className="py-3 mt-3"
                  style={{ boxShadow: "0 1px 2px 0 rgb(0 0 0 / 25%)" }}
                >
                  <div className="d-flex px-3">
                    <div style={{ fontSize: "16px", fontWeight: "600" }}>
                      UserName
                    </div>
                    <div
                      className="rounded-pill btn btn-dark border-0 text-dark p-0 px-2 ml-auto"
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        background: "#F5F5F6",
                      }}
                    >
                      HOME
                    </div>
                  </div>
                  <div className="p-3 pt-2" style={{color:"#696E79"}}>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    <br></br>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaa<br></br>aaaaaaaaaaaaaaaaaaaaa
                    <br></br>aaaaaaaa

                    
                  </div>
                  <div className="pt-2 pl-3" style={{color:"#696E79"}}>Mobile: xxxxxxxxxx</div>
                  <div className="pt-2 pl-3" style={{fontSize:"12px", color:"#14cda8", fontWeight:"700", cursor:"pointer"}}>MAKE THIS DEFAULT</div>
                  <hr></hr>
                  <div className="row">
                    <div
                      className="text-center col-6"
                      style={{ borderRight: "1px solid #8080804d" }}
                    >
                      <div
                        style={{
                          color: "#526cd0",
                          fontWeight: "500",
                          fontSize: "16px",
                        }}
                      >
                        EDIT
                      </div>
                    </div>
                    <div className="text-center col-6">
                      <div
                        style={{
                          color: "#526cd0",
                          fontWeight: "500",
                          fontSize: "16px",
                        }}
                      >
                        REMOVE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="insider" className="tab-pane fade">
                adsa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
