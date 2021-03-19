import React from "react";
import { fetchCategories } from "../../store/actions";
import { connect } from "../../store";
import { Hero } from "../../components";
import { Categories } from "./Categories";
import "./home.scss";

interface IHomeProps {
  history: any;
}

export const Home = connect()(({ history }: IHomeProps) => {
  React.useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <Hero />
      <Categories navigateToCategory={history.push} />
    </>
  );
});
