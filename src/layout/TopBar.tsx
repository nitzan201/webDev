import React from "react";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <div className="text-white">
      <a>
        <Link to={"/new"} className="">
          new workout
        </Link>
      </a>
      <a>
        <Link to={"/history"} className="">
          history
        </Link>
      </a>
    </div>
  );
};
