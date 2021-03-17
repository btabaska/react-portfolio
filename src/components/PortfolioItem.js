import React from "react";

//Props are source, title, description, gitHubLink, liveLink
const PortfolioItem = ({ props }) => {
  return (
    <div className="col-md-6">
      <div
        className="card p-md-3 center-block d-block mx-auto"
        style={{ width: "18rem" }}
      >
        <img className="card-img-top" src={props.source} alt="website" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {<p className="card-text">{props.description}</p>}
          <div className="row">
            <a href={props.gitHubLink} className="btn btn-primary m-md-1">
              View on GitHub
            </a>
            <a href={props.liveLink} className="btn btn-primary m-md-1">
              View Deployed WebApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
