import { render, screen } from '@testing-library/react';
import ApartmentProtectedIndex from '../pages/ApartmentProtectedIndex';
import { BrowserRouter } from 'react-router-dom';
import mockApartments from '../mockApartments';

describe("<ApartmentProtectedIndex />", () => {
  beforeEach(() => {
    const currentUser = {
      email: "test@test.com",
      id: 1
    }
    render(
      <BrowserRouter>
        <ApartmentProtectedIndex currentUser={currentUser} apartments={mockApartments}/>
      </BrowserRouter>
    )
  })
  it("renders without crashing", () => {
    const element = screen.getByText("My Listings:")
    expect(element).toBeInTheDocument()
  })

  it("renders apartment cards", () => {
    const myApartments = mockApartments.filter((apartment, currentUser) => currentUser.id === apartment.user_id)
    myApartments.forEach(apartment => {
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




