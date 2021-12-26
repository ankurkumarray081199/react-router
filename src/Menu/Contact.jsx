import React, { useState } from "react";

const Contact = () => {
  const FormSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}`);
  };
  const [data, setData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  return (
    <container className="heightclass">
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={FormSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Mobile number"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1"
                  placeholder="Enter your feedback"
                  rows="3"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-success" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </container>
  );
};

export default Contact;
