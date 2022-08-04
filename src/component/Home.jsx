import React from "react";

const Home = () => {
  return (
    <div className="container-fluid px-1 py-3 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <h3>Input Form</h3>
          <div className="card">
            <form className="form-card">
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    First name<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your Full name"
                    onblur="validate(1)"
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Date of birth<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    placeholder="Enter your last name"
                    onblur="validate(2)"
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Gender<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    placeholder=""
                    onblur="validate(3)"
                  />
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Time of entry<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    placeholder=""
                    onblur="validate(4)"
                  />
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  <label className="form-control-label px-3">
                    Photo Upload<span className="text-danger"> *</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder=""
                    onblur="validate(5)"
                  />
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="form-group col-sm-6">
                  <button type="submit" className="btn-block btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
