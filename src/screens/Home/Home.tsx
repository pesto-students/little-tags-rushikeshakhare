import * as React from "react";
import { Hero } from "../../components";
import { Categories } from "./Categories";
import "./home.scss";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
};
