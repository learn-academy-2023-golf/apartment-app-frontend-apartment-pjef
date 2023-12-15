import { render, screen } from '@testing-library/react';
import ApartmentIndex from '../pages/ApartmentIndex';
import { BrowserRouter } from 'react-router-dom';
import mockApartments from '../mockApartments';

describe("<ApartmentIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      id: 1
    }
    render(
      <BrowserRouter>
        <ApartmentIndex apartments={mockApartments}/>
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {
    const element = screen.getByText("View Listings:")
    expect(element).toBeInTheDocument()
  })

  it("renders apartment cards", () => {
    mockApartments.forEach(apartment => {
        const price = screen.getByText(`$${apartment.price}/month`)
        expect(price).toBeInTheDocument()
        const street = screen.getByText(apartment.street)
        expect(street).toBeInTheDocument()
        const city = screen.getByText(apartment.city)
        expect(city).toBeInTheDocument()
        const state = screen.getByText(apartment.state)
        expect(state).toBeInTheDocument()
        const bedrooms = screen.getByText(apartment.bedrooms)
        expect(bedrooms).tobeInTheDocument()
        const bathrooms = screen.getByText(apartment.bathrooms)
        expect(bathrooms).toBeInTheDocument()
        
    })
  })
})