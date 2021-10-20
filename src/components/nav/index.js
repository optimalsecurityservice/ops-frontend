import React from "react";
import { useState } from "react";
import Logo from "../Images/official-final logo-transparent.png";
import ApplyModal from "../ApplyModale/Apply";
import QuoteModal from "../QuoteModale/Quote";
import ham from "../Images/Menu.svg"
import "./style.nav.css";import { useHistory } from "react-router-dom";

const fS = {
  position: "fixed",
  zIndex: "9998",
  minHeight: "100vh",
  backgroundColor: "#000",
  top: "0",
  left: "0",
  opacity: "0.3",
  minWidth: "100vw",
};

const Nav = () => {
  let history = useHistory();
  const [isApply, setApply] = useState(false);
  const [isQuote, setQuote] = useState(false);
  const [isActive, setActive] = useState(false);

  return (
    <div className="nav col-12 d-flex flex-row justify-content-center">
      <div className="col-lg-10 col-12 d-flex flex-row align-items-center flex-wrap">
        <img
          src={Logo}
          alt={"OPS"}
          onClick={(e) => history.push("/home")}
          style={{ cursor: "pointer", width: "120px", height: "120px", marginRight: "auto" }}
        />
        {[
          {
            name: "Services",
            link: "/services",
          },
          {
            name: "Apply Now",
          },
          {
            name: "Contact Us",
            link: "/contact",
          },
          {
            name: "Get a Quote",
          },
        ].map((i) => {
          return (
            <h6
              className="link"
              onClick={(e) => {
                i.name === "Apply Now" && setApply(true);
                i.name === "Get a Quote" && setQuote(true);
                i.link && history.push(i.link)
              }}
            >

              {i.name}
            </h6>
          );
        })}
        <button className="burger-btn" onClick={(e) => setActive(!isActive)}>
          <img src={ham} alt="" style={{ width: "18px", height: "18px", }} />
        </button>
        {isActive && (
          <div className="d-flex flex-column col-12 align-items-center">
            {[
              {
                name: "Services",
                link: "/services",
              },
              {
                name: "Apply Now",
              },
              {
                name: "Contact Us",
                link: "/contact",
              },
              {
                name: "Get a Quote",
              },
            ].map((i) => {
              return <h6
                className="link-sm"
                onClick={(e) => {
                  i.name === "Apply Now" && setApply(true);
                  i.name === "Get a Quote" && setQuote(true);
                  i.link && history.push(i.link)
                }}
              >
                {i.name}
              </h6>;
            })}
          </div>
        )}
        {isApply && <div style={fS} onClick={(e) => setApply(false)} />}
        {isApply && <ApplyModal setApply={setApply} />}
        {isQuote && <div style={fS} onClick={(e) => setQuote(false)} />}
        {isQuote && <QuoteModal setQuote={setQuote} />}
      </div>
    </div>
  );
};

export default Nav;
