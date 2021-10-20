import React, { useState } from "react";
import "./Apply.css";
import cross from "../Images/Cross.svg";
import api from "../../utils/api";

function Apply({ setApply }) {
  async function handleChange(e) {
    let files = e.target.files;

    if (files && files[0]) {
      setUploading(true);
      let file = files[0];
      let formData = new FormData();
      formData.append("resume", file);
      let res = await api.put(`/upload/resume`, formData);
      if (res.data.fileName) setForm({ ...form, fileName: res.data.fileName });
      setUploading(false);
    }
  }

  const [form, setForm] = useState({
      first_name: "",
      last_name: "",
      email: "",
      age: 18,
      work_experience: true,
      licence: true,
      have_car: true,
      phone: "",
      fileName: "",
    }),
    [success, setSuccess] = useState(false),
    [uploading, setUploading] = useState(false);

  const onhandleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uploading) {
      await api.post(`/apply`, form);
      setSuccess(true);
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        age: 18,
        work_experience: true,
        licence: true,
        have_car: true,
        phone: "",
        fileName: "",
      });
    }
  };

  return (
    <div className="apply-primary">
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
              onClick={(e) => setApply(false)}
            />
          </div>
          <h1 style={{ textAlign: "center",fontFamily: `'Roboto', sans-serif`, fontWeight:"300" }}> Apply Now</h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex flex-row flex-wrap col-lg-11 justify-content-lg-between p-0">
              <div className="d-flex flex-column col-lg-5 col-12 mt-2 p-2">
                <label className="apply-form-label">First Name*</label>
                <input
                  placeholder="First Name"
                  type="text"
                  value={form.first_name}
                  name="first_name"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 apply-form-input"
                />
              </div>
              <div className="d-flex flex-column col-lg-5 col-12 mt-2 p-2">
                <label className="apply-form-label">Last Name*</label>
                <input
                  placeholder="Last Name"
                  type="text"
                  value={form.last_name}
                  name="last_name"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 apply-form-input"
                />
              </div>

              <div className="d-flex flex-column col-lg-5 col-12 mt-2 p-2">
                <label className="apply-form-label">Email*</label>
                <input
                  placeholder="Email"
                  type="email"
                  value={form.email}
                  name="email"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 apply-form-input"
                />
              </div>
              <div className="d-flex flex-column col-lg-5 col-12 mt-2 p-2">
                <label className="apply-form-label">Phone No.*</label>
                <input
                  type="text"
                  value={form.phone}
                  name="phone"
                  onChange={(e) => onhandleInput(e)}
                  placeholder="Phone Number"
                  className="p-2 mt-2 apply-form-input"
                />
              </div>

              <div className="d-flex flex-column col-lg-5 col-12 mt-2 p-2">
                <label className="apply-form-label">Age*</label>
                <input
                  placeholder="Age"
                  style={{ width: "100%" }}
                  type="number"
                  value={form.age}
                  name="age"
                  onChange={(e) => onhandleInput(e)}
                  className="p-2 apply-form-input"
                />
              </div>

              <div className="d-flex flex-column col-lg-5 col-12 mt-2 p-2">
                <label for="file-upload" className="apply-form-label">
                  Resume*
                </label>
                <input
                  class="custom-file-upload"
                  id="file-upload"
                  type="file"
                  style={{ width: "100%" }}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="col-12 d-flex flex-column mt-4">
                <h6 style={{ color: "black", fontSize: "15pt" ,fontFamily: `'Roboto', sans-serif`}}>
                  Are you licensed Security Guard in Ontario with valid First
                  Aid/CPR Certification?
                </h6>
                <h6
                  style={{
                    color: "red",
                    fontSize: "10pt",
                    marginBottom: "12px",
                    fontStyle: "italic",fontFamily: `'Roboto', sans-serif`
                  }}
                >
                  *Mandatory for the employment.
                </h6>
                <div>
                  <input
                    type="radio"
                    name="licence"
                    defaultChecked={form.licence}
                    onChange={(e) => {
                      setForm({ ...form, licence: true });
                    }}
                    id="yes"
                  />
                  <label for="yes">Yes</label>

                  <input
                    type="radio"
                    name="licence"
                    onChange={(e) => {
                      setForm({ ...form, licence: true });
                    }}
                    id="no"
                    style={{ marginLeft: "24px" }}
                  />
                  <label for="no">No</label>
                </div>
              </div>
              <div className="col-12 d-flex flex-column mt-4">
                <h6 style={{ color: "black", fontSize: "15pt",fontFamily: `'Roboto', sans-serif` }}>
                  Do you have valid G2/G driving licence and a personal vehicle?
                </h6>
                <h6
                  style={{
                    color: "red",
                    fontSize: "10pt",
                    marginBottom: "12px",
                    fontStyle: "italic",fontFamily: `'Roboto', sans-serif`
                  }}
                >
                  *An asset. Not mandatory for the employment.
                </h6>
                <div>
                  <input
                    type="radio"
                    name="have_car"
                    defaultChecked={form.have_car}
                    onChange={(e) => {
                      setForm({ ...form, have_car: true });
                    }}
                    id="yes"
                  />
                  <label for="yes">Yes</label>

                  <input
                    type="radio"
                    name="have_car"
                    onChange={(e) => {
                      setForm({ ...form, have_car: true });
                    }}
                    id="no"
                    style={{ marginLeft: "24px" }}
                  />
                  <label for="no">No</label>
                </div>
              </div>
              <div className="col-12 d-flex flex-column mt-4">
                <h6 style={{ color: "black", fontSize: "15pt",fontFamily: `'Roboto', sans-serif` }}>
                  Do you have any previous work experience in this field?
                </h6>
                <h6
                  style={{
                    color: "red",
                    fontSize: "10pt",
                    marginBottom: "12px",
                    fontStyle: "italic",fontFamily: `'Roboto', sans-serif`
                  }}
                >
                  *An asset. Not mandatory for the employment.
                </h6>
                <div>
                  <input
                    type="radio"
                    name="work_experience"
                    defaultChecked={form.work_experience}
                    onChange={(e) => {
                      setForm({ ...form, work_experience: true });
                    }}
                    id="yes"
                  />
                  <label for="yes">Yes</label>

                  <input
                    type="radio"
                    name="work_experience"
                    onChange={(e) => {
                      setForm({ ...form, work_experience: true });
                    }}
                    id="no"
                    style={{ marginLeft: "24px" }}
                  />
                  <label for="no">No</label>
                </div>
              </div>
            </div>
            <input
              disabled={uploading}
              type="submit"
              value="Submit"
              className="mt-5 col-lg-4 col-12 apply-btn "
            />
          </form>
        </>
      )}
    </div>
  );
}
export default Apply;
