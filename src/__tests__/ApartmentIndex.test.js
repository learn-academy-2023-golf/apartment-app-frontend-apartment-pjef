import { render, screen } from "@testing-library/react";
import ApartmentIndex from "../pages/ApartmentIndex";
import { BrowserRouter } from "react-router-dom";
import mockApartments from "../mockApartments";

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      id: 1,
    };
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments} />
      </BrowserRouter>
    );
  });
  it("renders without crashing", () => {
    const element = screen.getByText("View Listings:");
    expect(element).toBeInTheDocument();
  });

  it("contains buttons", () => {
    const allButtons = document.querySelectorAll("button");
    allButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it("renders apartment cards", () => {
    mockApartments.forEach((apartment) => {
      const price = screen.getByText(`$${apartment.price}/month`);
      expect(price).toBeInTheDocument();

      const address = screen.getByText(
        `${apartment.street}, ${apartment.city}, ${apartment.state}`
      );
      expect(address).toBeInTheDocument();

      const rooms = screen.getAllByText(
        `${apartment.bedrooms} Bedroom ${apartment.bathrooms} Bath`
      );
      rooms.forEach((room) => expect(room).toBeInTheDocument());
    });
  });
});
