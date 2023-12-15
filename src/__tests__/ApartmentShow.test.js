import { render, screen } from "@testing-library/react";
import ApartmentShow from "../pages/ApartmentShow";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import mockApartments from "../mockApartments";
import { mockComponent } from "react-dom/test-utils";

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/show/1"]}>
      <Routes>
        <Route
          path="show/:id"
          element={<ApartmentShow apartments={mockApartments} />}
        ></Route>
      </Routes>
    </MemoryRouter>
  );
};

describe("<ApartmentShow/>", () => {
  it("It render without errors", () => {
    renderShow();
  });

  it("Render correct attributes", () => {
    renderShow();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(`$${mockApartments[0].price}/month`));
    expect(screen.getByText(/101 rimrock, san diego, ca/i));
    expect(screen.getByText(/2 bedroom, 2 bath/i));
    expect(screen.getByText(/pets: yes!/i));
    expect(
      screen.getByRole("button", {
        name: /back to listings/i,
      })
    );
  });
});
