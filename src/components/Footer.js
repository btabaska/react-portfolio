import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer fixed-bottom py-3 bg-dark border-top border-info">
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col">
              <small className="text-white">
                Copyright &copy; Brandon Tabaska
              </small>
            </div>
          </div>
        </div>
      </footer>
      ;
    </React.Fragment>
  );
};

export default Footer;
