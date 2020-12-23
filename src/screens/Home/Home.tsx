import * as React from "react";
import { Hero } from "../../components";
import { Categories } from "./Categories";
import { withContainer } from "../../hocs/withContainer";
import "./home.scss";

interface IHomeProps {
  history: any;
}

export const Home = withContainer(({ history }: IHomeProps) => {
  return (
    <>
      <Hero />
      <Categories navigateToCategory={history.push} />
    </>
  );
});
