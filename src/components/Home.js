import React from "react";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import {
  Banner,
  Deals,
  Brands,
  Brands1,
  TopPicks,
  categories,
  categories1,
  categories2,
  TopBrands,
  TopBrands1,
  TopBrands2,
  SlashedPrice,
  SlashedPrice1,
  BestBuys,
  BestBuys1,
  MyntraLuxe,
  MyntraLuxe1,
  GiftCards,
  FirstOnMyntra,
  FirstOnMyntra1,
  HottestFinds,
  TrendsForHer,
  TrendsForHim,
  Kidswear,
  NewBrands,
  SpringSeason,
  occasion,
  occasion1,
  Grooming,
  Grooming1,
  Unmissable,
  Colours,
  Colours1,
  Influencers,
  BudgetPicks,
  TrendingOutfits,
} from "../Data/Data";
// import Carousel from "react-material-ui-carousel";
import Donate from "./images/Donation.webp";
import Spotlight from "./images/spotlight.gif";

function Home() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="my-5">
        <Carousel>
          {Banner.map((e) => (
            <Carousel.Item interval="3000" key={e.id}>
              <img src={e.image} className="img-fluid d-block w-100"></img>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="my-5">
        <img src={Donate} className="img-fluid w-100" alt="donation" />
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 mb-5">DEAL OF THE DAY</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {Deals.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    style={{ width: "25.4vh", height: "37vh" }}
                    alt="Deals of the day"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <img src={Spotlight} className="img-fluid w-100" alt="spotlight" />
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BEST OF MYNTRA EXCLUSIVE BRANDS</h2>
        <div className="row mx-0">
          {Brands.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "37vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {Brands1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "37vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TOP PICKS</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {TopPicks.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">CATEGORIES TO BAG</h2>
        <div className="row mx-0">
          {categories.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "30vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {categories1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "30vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {categories2.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "30vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">DEALS ON TOP BRANDS</h2>
        <div className="row mx-0">
          {TopBrands.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "37vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {TopBrands1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "37vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {TopBrands2.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "37vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BRANDS AT SLASHED PRICES</h2>
        <div className="row mx-0">
          {SlashedPrice.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "37vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {SlashedPrice1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "37vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BEST BUYS</h2>
        <div className="row mx-0">
          {BestBuys.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "32vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {BestBuys1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "32vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">MYNTRA LUXE</h2>
        <div className="row mx-0">
          {MyntraLuxe.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "32vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {MyntraLuxe1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "33vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">GIFTING CARDS</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {GiftCards.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "40.6vh", height: "33vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">SPRING SUMMER 2022- FIRST ON MYNTRA</h2>
        <div className="row mx-0">
          {FirstOnMyntra.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "32vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {FirstOnMyntra1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "25.4vh", height: "32vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">STYLECAST HOTTEST FINDS</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {HottestFinds.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "29vh", height: "39vh" }}
                  />
                </NavLink>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TRENDS FOR HER</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {TrendsForHer.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TRENDS FOR HIM</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {TrendsForHim.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BEST OF KIDSWEAR</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {Kidswear.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">NEW IN TOP BRANDS</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {NewBrands.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">SPRING SUMMER SEASON CHECKLIST</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {SpringSeason.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">NEWNESS FOR EVERY OCCASION</h2>
        <div className="row mx-0">
          {occasion.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "51vh", height: "36vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {occasion1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "51vh", height: "36vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">LATEST IN BEAUTY & GROOMING</h2>
        <div className="row mx-0">
          {Grooming.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "51vh", height: "36vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {Grooming1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "51vh", height: "36vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">UNMISSABLE THIS SEASON</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {Unmissable.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">COLOURS OF THE SEASON</h2>
        <div className="row mx-0">
          {Colours.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "51vh", height: "36vh" }}
              />
            </div>
          ))}
        </div>
        <div className="row mx-0">
          {Colours1.map((image) => (
            <div className="col" style={{ padding: "0" }}>
              <img
                src={image}
                className="img-fluid"
                alt="Deals of the day"
                style={{ width: "51vh", height: "36vh" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TOP INFLUENCERS EXCLUSIVE STYLES</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {Influencers.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">BUDGET PICKS INFLUENCERS LOVE</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {BudgetPicks.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pl-1">
        <h2 className="title pl-4 my-5">TRENDING OUTFITS BY INFLUENCERS</h2>
        <div className="dealsRow">
          <div className="d-flex">
            {TrendingOutfits.map((image) => (
              <div className="" style={{ padding: "0" }}>
                <NavLink to="/myntra">
                  <img
                    src={image}
                    alt="Deals of the day"
                    style={{ width: "25.4vh", height: "37vh" }}
                  />
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
