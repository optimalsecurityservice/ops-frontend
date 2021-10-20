import React, { useReducer } from "react";
import icon from "../components/Images/down-arrow-black-circular-button.png";

let Services = [
  {
    id: "s1",
    title: "Personal Security Guards",
    description:
      "We can assign professionally trained bodyguards to protect our clients from various dangers such as robberies, assaults, and more.",
    active: false,
  },
  {
    id: "s2",
    title: "Event Security",
    description:
      "To help with every aspect of the security of your event, we offer a full range of event security services.",
    active: false,
  },
  {
    id: "s3",
    title: "Residential Security",
    description:
      "We will protect your property from home invasions, disturbances, or any other threats that could put the wellbeing in jeopardy. These include burglaries, break-ins, assaults, property theft, and vandalism.",
    active: false,
  },
  {
    id: "s4",
    title: "Front Desk Security",
    description:
      "Just like concierges, our guards will greet your guests to sign them in and out.  They will be also taking phone calls. Additionally, they will also perform all security guards duties like patrolling the premises, looking for signs of intrusion, investigating disturbances, contacting the police in case of emergency, and operating surveillance systems.",
    active: false,
  },
  {
    id: "s5",
    title: "Construction Security",
    description:
      "You can assign even one or as many Security Guards as you like to protect your construction sites from break-ins, assaults, property theft, and vandalism.",
    active: false,
  },
  {
    id: "s6",
    title: "CCTV Surveillance",
    description:
      "We also help our clients by providing 24x7 monitoring and surveillance to their properties through CCTV cameras.  In case of emergency, like unlawful break-ins, property theft, and vandalism, an immediate contact to the police will be made right away. ",
    active: false,
  },
  {
    id: "s7",
    title: "Private Investigation",
    description:
      "We can help you assigning a licensed private investigator to help you with legal, financial, and personal matters. We do understand such services are needed for extremely sensitive matters hence your privacy will be our priority.  ",
    active: false,
  },
  {
    id: "s8",
    title: "Property Guarding",
    description:
      "We will protect your commercial/industrial property from invasions, disturbances, or any other threats including burglaries, break-ins, assaults, property theft, and vandalism.",
    active: false,
  },
  {
    id: "s9",
    title: "Fire Watch",
    description:
      "Our guards will physically patrol your building/property to check for fire hazards.",
    active: false,
  },
  {
    id: "s10",
    title: "Loss Prevention",
    description:
      "We can assign both uniformed and plainclothes loss prevention personnel. Uniformed guards are immediately identifiable as a person of authority. Tasks like access control, load and pallet inspections, wanding, x-raying, bag searches and vehicle searches can be performed by uniformed guards. Plainclothes personnel acts undercover within retail settings to spot and apprehend shoplifters and to prevent product shrinkage. ",
    active: false,
  },
];

function ServicesPage() {


  if (window && window.location) {
    let location = window.location.href;
    location = location.split("/");
    location = location[location.length - 1];
    location = location.replaceAll("%20", " ");

    if (location && location !== "services") {
      Services.map((i) => {
        if (i.title === location) {
          i.active = true;
        }
        else i.active = false;

        return i;
      });
    } else {
    }
  }


  const reducer = (services, action) => {
    if (action.type === "toggle-active") {
      return services.map((service, key) => {
        if (key === action.payload) {
          service.active = true;
        }
        return service;
      });
    } else if (action.type === "toggle-disable") {
      return services.map((service, key) => {
        if (key === action.payload) {
          service.active = false;
        }
        return service;
      });
    } else {
      return services;
    }
  };

  const [arr, dispatch] = useReducer(reducer, Services);

  return (
    <div
      style={{ backgroundColor: "#1b1b1b", paddingBottom: "60px" }}
      className="d-flex flex-column align-items-center col-12"
    >
      <h4
        className="col-lg-11 col-11"
        style={{ color: "#d5b964", marginTop: "60px", marginBottom: "30px", fontFamily: `'Roboto', sans-serif` }}
      >
        Services that we provide:
      </h4>
      {arr.map((s, k) => {
        return (
          <div k={s.id} className="col-lg-11 col-11 mt-2 mb-2 d-flex flex-column align-items-center">
            <div
              className="col-lg-11 col-12 d-flex fd-column "
              style={{
                height: "50px",
                backgroundColor: "#d5b964",
                alignItems: "center",
                border: "none",
                cursor: "pointer",
                padding: "6px 24px",
              }}
              onClick={(e) =>
                dispatch({
                  type: s.active ? "toggle-disable" : "toggle-active",
                  payload: k,
                })
              }
            >
              <h5 style={{ fontFamily: `'Roboto', sans-serif`, color: "black", fontWeight: "700" }}> {s.title}</h5>
              <img
                src={icon}
                alt=""
                style={{
                  width: "30px",
                  height: "30px",
                  margin: "5px 30px 0px auto",
                  transform: s.active ? `rotate(180deg)` : `rotate(0deg)`,
                  transition: `ease-in-out all 0.5s`,
                }}
              />
            </div>
            {s.active && (
              <p
                className="col-lg-11 col-11 d-flex fd-column "
                style={{
                  color: "#black",
                  padding: "12px 24px",
                  minHeight: "50px",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  transition: `ease-in-out all 0.2s`,
                  borderRadius: "20px",
                  backgroundColor: "#FFFBE9", fontFamily: `'Roboto', sans-serif`
                }}
              >
                {s.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default ServicesPage;
