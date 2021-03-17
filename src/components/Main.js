import React from "react";
import LinkButton from "./LinkButton";
import portrait from "../assets/images/brandon.jpg";

const Main = () => {
  return (
    <div className="container">
      <div className="row" style={{ height: "100px" }}></div>
      <div className="row">
        <main className="col-md-10 bg-white p-md-4">
          <div className="row px-md-4 border-bottom border-gray">
            <h1 className="text-info">About Me</h1>
          </div>
          <div className="row">
            <div className="col-md-12">
              <img
                src={portrait}
                className="float-left p-md-3"
                alt="self portrait"
              />
              <p className="p-md-3">
                Hi, my name is Brandon and I am learning how to be a web
                developer. This is my first portfolio site to show off my
                progress learning CSS and HTML using Bootstrap. You will find
                that this site is incredibly responsive because I wrote it using
                almost exclusively bootstrap so that all the containers and
                their rows and columns keep a similar layout even if the
                viewport is changed. I have placed some links to my various
                social media profiles and my github if you are interested in
                seeing and learning more about me. Although I do not have enough
                work on my portfolio to show, I do have pictures of my adorable
                cat Flora. I have learned that having a cute cat is just as
                important as coding for successful web developers. I find that
                Flora is exceedingly cute and I hope that she makes up for my
                current lack of additional work.
                <br />
                <br />
                While I am also learning web development I am currently a DevOps
                Release engineer with San Jose State Research Foundation working
                at NASA AMES. I have previously worked at Apple doing employee
                technical training for the silicon valley market. In my spare
                time I enjoy all things tech, taking photos of landscapes and my
                cat and eating delicious food with my wonderful wife.
                <br />
                <br />
                Email: Btabaska@gmail.com || Phone: 1-(650)-776-6418
              </p>

              <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <LinkButton
                      props={{
                        link: "https://github.com/btabaska",
                        title: "Github",
                        icon: "fab fa-github-square",
                      }}
                    />
                    <LinkButton
                      props={{
                        link:
                          "https://www.linkedin.com/in/brandon-tabaska-846167b6/",
                        title: "Linkedin",
                        icon: "fab fa-linkedin",
                      }}
                    />
                    <LinkButton
                      props={{
                        link: "../assets/Resume 2020.pdf",
                        title: "Resume",
                        icon: "fas fa-file",
                      }}
                    />
                    <LinkButton
                      props={{
                        link: "https://twitter.com/Btabaska",
                        title: "Twitter",
                        icon: "fab fa-twitter",
                      }}
                    />
                  </div>
                </div>
                <div className="col-sm-4"></div>
              </div>
              <div className="row" style={{ height: "10px" }}></div>
            </div>
          </div>
        </main>
        <div className="col-md-2"></div>
      </div>
      <div className="row" style={{ height: "100px" }}></div>
    </div>
  );
};

export default Main;
