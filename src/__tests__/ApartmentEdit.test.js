import { render, screen } from "@testing-library/react";
import ApartmentEdit from "../pages/ApartmentEdit";
import { Routes, Route, MemoryRouter } from "react-router-dom";
import mockApartments from "../mockApartments";

describe("<ApartmentEdit />", () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/edit/1"]}>
        <Routes>
          <Route
            path="edit/:id"
            element={<ApartmentEdit apartments={mockApartments} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  it("renders a Apartment Page", () => {
    const text = screen.getByText(/edit apartment/i);
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
    expect(screen.getByText(/street/i));

    expect(screen.getByText(/unit/i));

    expect(screen.getByText(/city/i));

    expect(screen.getByText(/state/i));

    expect(screen.getByText(/square footage/i));

    expect(screen.getByText(/price/i));

    expect(screen.getByText(/bedrooms/i));

    expect(screen.getByText(/bathrooms/i));

    expect(screen.getByText(/pets/i));

    expect(screen.getByText(/image/i));
  });

  it("has a button called 'Submit'", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
