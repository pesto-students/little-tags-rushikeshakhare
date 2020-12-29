import React, { useEffect } from "react";
import { fetchCategories } from "../../store/actions";
import { connect } from "../../store";
import { Hero } from "../../components";
import { Categories } from "./Categories";
import { withContainer } from "../../hocs/withContainer";
import "./home.scss";

interface IHomeProps {
  history: any;
}

export const Home = connect()(
  withContainer(({ history }: IHomeProps) => {
    React.useEffect(() => {
      fetchCategories();
    }, []);

    return (
      <>
        <Hero />
        <Categories navigateToCategory={history.push} />
      </>
    );
  })
);
