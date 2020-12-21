import * as React from "react";
import { Hero } from "../../components";
import { Categories } from "./Categories";
import "./home.scss";

interface IHomeProps {
  history: any;
}

export const Home = ({ history }: IHomeProps) => {
  return (
    <>
      <Hero />
      <Categories navigateToCategory={history.push} />
    </>
  );
};
