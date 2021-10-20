import React, { useState } from "react";
import "./Quote.css";
import cross from "../Images/Cross.svg";
import api from "../../utils/api";
function Quote({ setQuote }) {
  const [form, setForm] = useState({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      location: "",
      service: "",
      info: "",
    }),
    [success, setSuccess] = useState(false);

  const onhandleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(`/qoute`, form);
    setSuccess(true);
    setForm({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
      location: "",
      service: "",
      info: "",
    });
  };

  return (
    <div className="quote-primary">
      {success ? (
        <div
          style={{ minHeight: "60vh", width: "100%" }}
          className="d-flex align-items-center justify-content-center"
        >
          <h1 style={{ fontFamily: `'Roboto', sans-serif` }}>
            Submission successful.
          </h1>
        </div>
      ) : (
        <>
          <div className="d-flex flex-row justify-content-end">
            <img
              style={{ cursor: "pointer" }}
              src={cross}
              alt=""
              onClick={(e) => setQuote(false)}
            />
          </div>
          <h1
            style={{
              textAlign: "center",
              fontFamily: `'Roboto', sans-serif`,
              fontWeight: "300",
            }}
          >
           
            Quote
          </h1>
          <h3
            style={{
              textAlign: "center",
              fontFamily: `'Roboto', sans-serif`,
              fontWeight: "300",
            }}
          >
            Fill the form below to get a free quote
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-row flex-wrap col-12 p-0">
              <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
                <label className="quote-form-label">First Name*</label>
                <input
                  placeholder="First Name"
                  type="text"
                  value={form.first_name}
                  name="first_name"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 quote-form-input"
                />
              </div>
              <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
                <label className="quote-form-label">Last Name*</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  value={form.last_name}
                  name="last_name"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 quote-form-input"
                />
              </div>
              <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
                <label className="quote-form-label">Email*</label>

                <input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  name="email"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 quote-form-input"
                />
              </div>
              <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
                <label className="quote-form-label">Phone No.*</label>
                <input
                  type="text"
                  value={form.phone}
                  name="phone"
                  onChange={(e) => onhandleInput(e)}
                  placeholder="Phone Number"
                  className="p-2 quote-form-input"
                />
              </div>
              <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
                <label className="quote-form-label">Location*</label>
                <input
                  placeholder="Location"
                  type="text"
                  value={form.location}
                  name="location"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 quote-form-input"
                />
              </div>
              <div className="d-flex flex-column col-lg-6 col-12 mt-2 p-2">
                <label for="Services" className="quote-form-label">
                  Select Service*
                </label>
                <select
                  value={form.service}
                  name="service"
                  onChange={(e) => onhandleInput(e)}
                  style={{
                    height: "40px",
                    marginTop: "10px",
                    width: "100%",
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  <option value="">-Select-</option>
                  <option value="Personal Security Guards">
                    Personal Security Guards
                  </option>
                  <option value="Event Security">Event Security</option>
                  <option value="Residential Security">
                    Residential Security
                  </option>
                  <option value="Front Desk Security">
                    Front Desk Security
                  </option>
                  <option value="Construction Security">
                    Construction Security
                  </option>
                  <option value="CCTV Surveillance">CCTV Surveillance</option>
                  <option value="Private Investigation">
                    Private Investigation
                  </option>
                  <option value="Property Guarding">Property Guarding</option>
                  <option value="Fire Watch">Fire Watch</option>
                  <option value="Loss Preventions">Loss Preventions</option>
                </select>
              </div>
              <div className="d-flex flex-column col-12 p-2">
                <label for="messagebox" className="quote-form-label">
                  Instructions About Required Services
                </label>
                <textarea
                  type="textarea"
                  placeholder="About Service "
                  rows="4"
                  value={form.info}
                  name="info"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 quote-form-input"
                />
                <input
                  type="submit"
                  value="Send"
                  className="mt-5 col-lg-4 col-12 quote-btn"
                />
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
export default Quote;
