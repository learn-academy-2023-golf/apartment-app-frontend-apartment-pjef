import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate, useParams } from "react-router-dom";

const ApartmentEdit = ({ apartments, handleEditApartment }) => {
  const { id } = useParams();
  const currApartment = apartments?.find((apartment) => apartment.id === +id);
  const navigate = useNavigate();

  const [editApartment, setEditApartment] = useState({
    street: currApartment.street,
    unit: currApartment.unit,
    city: currApartment.city,
    state: currApartment.state,
    square_footage: currApartment.square_footage,
    price: currApartment.price,
    bedrooms: currApartment.bedrooms,
    bathrooms: currApartment.bathrooms,
    pets: currApartment.pets,
    image: currApartment.image,
    id: currApartment.id,
    user_id: currApartment.user_id,
  });

  const handleChange = (e) => {
    setEditApartment({ ...editApartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleEditApartment(editApartment, currApartment.id);
    navigate("/index");
    console.log(apartments);
    console.log(currApartment);
  };

  return (
    <div>
      <h1 className="text-center my-5" style={{ textShadow: "0 5px 5px grey" }}>
        Edit Apartment
      </h1>

      <Form className="w-50 m-auto p-3 shadow-lg rounded my-5 pt-5 pb-3">
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            name="street"
            placeholder={currApartment.street}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input
            name="unit"
            placeholder={currApartment.unit}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            name="city"
            placeholder={currApartment.city}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            name="state"
            placeholder={currApartment.state}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="square footage">Square Footage</Label>
          <Input
            name="square footage"
            placeholder={currApartment.square_footage}
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            name="price"
            placeholder={currApartment.price}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            name="bedrooms"
            placeholder={currApartment.bedrooms}
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            name="bathrooms"
            placeholder={currApartment.bathrooms}
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            name="pets"
            placeholder={currApartment.pets}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            name="image"
            placeholder={currApartment.image}
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ApartmentEdit;
