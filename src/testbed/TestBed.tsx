import * as React from "react";
import * as AllComponents from "../components";
import { getObjectWithTypesAsString } from "./utils";
import fixtures from "./fixtures";
import "./testbed.scss";

export const TestBed = () => {
  const [currentKey, setCurrentKey]: any = React.useState("Menu");
  const [showComponents, setShowComponents]: any = React.useState(false);

  const getFixture = (): any => {
    if (currentKey === "Login") return fixtures.Login;
    if (currentKey === "Menu") return fixtures.Menu;
    if (currentKey === "Header") return fixtures.Header;
    if (currentKey === "Hero") return fixtures.Hero;
    if (currentKey === "CategoryCard") return fixtures.CategoryCard;
    if (currentKey === "ProductCard") return fixtures.ProductCard;
    if (currentKey === "Search") return fixtures.Search;
    if (currentKey === "ItemQuantity") return fixtures.ItemQuantity;
    return null;
  };

  const getComponent = () => {
    if (currentKey === "Login")
      return <AllComponents.Login {...getFixture()} />;
    if (currentKey === "Menu") return <AllComponents.Menu {...getFixture()} />;
    if (currentKey === "Header")
      return <AllComponents.Header {...getFixture()} />;
    if (currentKey === "Footer")
      return <AllComponents.Footer {...getFixture()} />;
    if (currentKey === "Hero") return <AllComponents.Hero {...getFixture()} />;
    if (currentKey === "CategoryCard")
      return <AllComponents.CategoryCard {...getFixture()} />;
    if (currentKey === "ProductCard")
      return <AllComponents.ProductCard {...getFixture()} />;
    if (currentKey === "Search")
      return <AllComponents.Search {...getFixture()} />;
    if (currentKey === "ItemQuantity")
      return <AllComponents.ItemQuantity {...getFixture()} />;
    return <></>;
  };

  return (
    <div className="testbed">
      <h1>TestBed</h1>
      <button
        className="btn component-selection"
        onClick={() => setShowComponents(true)}
      >
        Change Component
      </button>
      <div className="testbed-component-info">
        Component Name - <b> {currentKey}</b>
        <br />
        <br />
        Props : {getObjectWithTypesAsString(getFixture())}
      </div>
      {showComponents && (
        <div className="testbed-menu">
          <h2>Components</h2>
          <ul>
            {Object.keys(AllComponents).map((componentName: string) => {
              return (
                <li
                  onClick={() => {
                    setCurrentKey(componentName);
                    setShowComponents(false);
                  }}
                >
                  {componentName}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="testbed-component-view">
        <h3 style={{ padding: "20px" }}>Component View</h3>
        <br />
        {getComponent()}
      </div>
    </div>
  );
};
