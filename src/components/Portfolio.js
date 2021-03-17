import React from "react";
import PortfolioItem from "./PortfolioItem";
import weatherDashboard from "../assets/images/weather_dashboard.png";
import durationStation from "../assets/images/Duration-Station1.png";
import workDayScheduler from "../assets/images/work_day_scheduler.png";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div
        id="page-container"
        className="container-fluid pr-0 pl-0 h-100 d-flex flex-column"
      >
        <div className="container">
          <div className="row" style={{ height: "100px" }}></div>
          <div className="row">
            <main className="col-md-10 bg-white p-md-4">
              <div className="row px-md-4 border-bottom border-gray">
                <h1 className="text-info">Portfolio</h1>
              </div>
              <div className="row">
                <PortfolioItem
                  props={{
                    source: weatherDashboard,
                    title: "Global Weather Dashboard",
                    description: `It allows you to search for any city in the world and
                        will pull in its current weather, as well as a 5 day
                        forecast. The dashboard saves your searches so that you
                        can easily pull the information back up when you need to
                        access it again. Just click on the name of the city you
                        want to see again and it will pull it out of your local
                        storage on your browser!`,

                    gitHubLink:
                      "https://github.com/btabaska/Global-Weather-Dashboard",
                    liveLink:
                      "https://btabaska.github.io/Global-Weather-Dashboard/",
                  }}
                />
                <PortfolioItem
                  props={{
                    source: durationStation,
                    title: "Duration station",
                    description: `This app allows you to search any album by any artist and
                    it will return to you the album runtime. It’s as simple as
                    that. The app will also display the artist name, album
                    title, an album description if one is available and the
                    album track list.`,
                    gitHubLink: "https://github.com/btabaska/project1",
                    liveLink: "https://btabaska.github.io/project1/",
                  }}
                />
              </div>
              <div className="row" style={{ height: "10px" }}></div>
              <div className="row">
                <PortfolioItem
                  props={{
                    source: workDayScheduler,
                    title: "Work Day Scheduler",
                    description: `This is a simple day planner app to be used to plan our
                    your 9am-5pm workday. It allows scheduling of tasks on an
                    hour by hour basis. It will save the tasks once the
                    corresponding save button is clicked. Finally, the app
                    keeps track of the current time of the day and will let
                    you know visually what events have already happened, are
                    currently happening or have been planned for the future.`,
                    gitHubLink: "https://github.com/btabaska/Homework-Week-5",
                    liveLink: "https://btabaska.github.io/Homework-Week-5/",
                  }}
                />
                <PortfolioItem
                  props={{
                    source: "https://i.imgur.com/3CjuCSp.png",
                    title: "Burger Tracker",
                    description:
                      "This is a simple app to track burgers you have eaten or plan to eat.",
                    gitHubLink: "https://github.com/btabaska/burger-logger",
                    liveLink: "https://btabaskas-burger-logger.herokuapp.com",
                  }}
                />
              </div>
              <div className="row">
                <PortfolioItem
                  props={{
                    source:
                      "https://user-images.githubusercontent.com/69176601/106257029-23f7f580-61c0-11eb-8f53-ebf6d5dba92d.png",
                    title: "GreenHaus",
                    description: `This is Project 2 of our class. We needed to create an application that uses a new npm package or api as well as being able to have CRUD functionality. We created an app that helps you keep track of the plants you own. you can keep track of things like notes you leave about each plant, when you last watered it and even add photos on how it is doing.`,
                    gitHubLink: "https://github.com/btabaska/Greenhaus",
                    liveLink: "https://vast-escarpment-39602.herokuapp.com",
                  }}
                />
                <PortfolioItem
                  props={{
                    source:
                      "https://camo.githubusercontent.com/72a05f47f10f8dc3f11b9fea991b8ad591fecb19790622e529381b61980b5316/68747470733a2f2f692e696d6775722e636f6d2f62465151485a532e706e67",
                    title: "Fitness Tracker",
                    description: `This is an app that can be used to track your cardio and strength training performance over time. It features a dashboard that will show you aggregate data for the last 7 workouts.`,
                    gitHubLink: "https://github.com/btabaska/fitness_tracker",
                    liveLink:
                      "https://arcane-hollows-42613.herokuapp.com/?id=6026dc3c1215ed001571ae6f",
                  }}
                />
              </div>
            </main>
            <div className="row" style={{ height: "100px" }}></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
