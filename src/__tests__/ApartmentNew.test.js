import { render, screen } from "@testing-library/react";
import ApartmentNew from "../pages/ApartmentNew";
import { BrowserRouter } from "react-router-dom";

describe("<ApartmentNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ApartmentNew />
      </BrowserRouter>
    );
  });
  it("renders a Apartment New Page", () => {
    const text = screen.getByText(/add new apartment/i);
    expect(text).toBeInTheDocument();
  });

  const arr = [
    "street",
    "unit",
    "city",
    "state",
    "square_footage",
    "price",
    "bedrooms",
    "bathrooms",
    "pets",
    "image",
  ];

  it("has a form with correct entries", () => {
    screen.logTestingPlaygroundURL();
    expect(screen.getByText(/street/i));
    expect(screen.getByPlaceholderText(/street/i));

    expect(screen.getByText(/unit/i));
    expect(screen.getByPlaceholderText(/unit/i));

    expect(screen.getByText(/city/i));
    expect(screen.getByPlaceholderText(/city/i));

    expect(screen.getByText(/state/i));
    expect(screen.getByPlaceholderText(/state/i));

    expect(screen.getByText(/square footage/i));
    expect(screen.getByPlaceholderText(/square footage/i));

    expect(screen.getByText(/price/i));
    expect(screen.getByPlaceholderText(/price/i));

    expect(screen.getByText(/bedrooms/i));
    expect(screen.getByPlaceholderText(/bedrooms/i));

    expect(screen.getByText(/bathrooms/i));
    expect(screen.getByPlaceholderText(/bathrooms/i));

    expect(screen.getByText(/pets/i));
    expect(screen.getByPlaceholderText(/pets/i));

    expect(screen.getByText(/image/i));
    expect(screen.getByPlaceholderText(/image/i));
  });

  it("has a button called 'Submit'", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
