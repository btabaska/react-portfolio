import React from "react";

const Contact = () => {
  return (
    <div
      id="page-container"
      className="container-fluid pr-0 pl-0 h-100 d-flex flex-column"
    >
      <div className="container">
        <div className="row" style={{ height: "100px" }}></div>
        <div className="row">
          <main className="col-md-10 bg-white p-md-4">
            <div className="row px-md-4 border-bottom border-gray">
              <h1 className="text-info">Contact</h1>
            </div>
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      placeholder="Message"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-info mb-3">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </main>
          <div className="col-md-2"></div>
        </div>
        <div className="row" style={{ height: "100px" }}></div>
      </div>
    </div>
  );
};

export default Contact;
