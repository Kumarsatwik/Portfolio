import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import axios from "axios";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]); // State to store filtered projects
  const [allProjects, setAllProjects] = useState([]); // State to store all projects data
  const [active, setActive] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
       
          axios.get("https://portfolio-backend-ldhx.onrender.com/get-data").then((res)=>{
              
              setAllProjects(res.data.projects);
              setProjects(res.data.projects);
          })

        // Set all projects data to allProjects state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(allProjects);
    } else {
    //   console.log(item);
      const newProjects = allProjects.filter((project) => {
        return project.category == item.name;
      });
    //   console.log(newProjects);
      setProjects(newProjects);
    }
  }, [item, allProjects]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
