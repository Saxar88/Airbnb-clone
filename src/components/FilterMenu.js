import React from "react";
import "./FilterMenu.css";
import Filter from "./Filter";
import tinyHomes from "../assets/tiny-homes.jpg";
import omg from "../assets/omg.jpg";
import amazingViews from "../assets/amazing-views.jpg";
import farms from "../assets/farms.jpg";
import arctic from "../assets/arctic.jpg";
import cabins from "../assets/cabins.jpg";
import aFrames from "../assets/a-frames.jpg";
import trending from "../assets/trending.jpg";
import ski from "../assets/ski.jpg";
import luxe from "../assets/luxe.jpg";
import top from "../assets/top.jpg";
import castles from "../assets/castles.jpg";
import treehouses from "../assets/treehouses.jpg";

function Filters() {
  const sorting = [
    { title: "Tiny homes", icon: tinyHomes },
    { title: "OMG!", icon: omg },
    { title: "Amazing views", icon: amazingViews },
    { title: "Farms", icon: farms },
    { title: "Arctic", icon: arctic },
    { title: "Cabins", icon: cabins },
    { title: "A-frames", icon: aFrames },
    { title: "Trending", icon: trending },
    { title: "Ski-in/out", icon: ski },
    { title: "Luxe", icon: luxe },
    { title: "Top of the world", icon: top },
    { title: "Castles", icon: castles },
    { title: "Treehouses", icon: treehouses },
  ];

  return (
    <div className="filters">
      <div className="filters--list">
        {sorting.map((item, i) => (
          <Filter key={i} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default Filters;
