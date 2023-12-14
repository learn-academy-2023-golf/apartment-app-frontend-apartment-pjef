import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("<App/>", () => {
  const app = () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  };

  it("Renders without errors", () => {
    app();
  });
});
