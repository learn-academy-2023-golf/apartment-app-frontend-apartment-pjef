import React from "react";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ApartmentNew = ({ handleAddApartment }) => {
  const navigate = useNavigate();

  const [newApartment, setNewApartment] = useState({
    street: "",
    unit: "",
    city: "",
    state: "",
    square_footage: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleAddApartment(newApartment);
    navigate("/index");
  };

  return (
    <div>
      <h1 className="text-center my-5" style={{ textShadow: "0 5px 5px grey" }}>
        Add New Apartment
      </h1>

      <Form className="w-50 m-auto p-3 shadow-lg rounded my-5 pt-5 pb-3">
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            name="street"
            placeholder="Street Name"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="unit">Unit</Label>
          <Input
            name="unit"
            placeholder="Unit"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            name="city"
            placeholder="City"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            name="state"
            placeholder="State"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="square footage">Square Footage</Label>
          <Input
            name="square footage"
            placeholder="Square Footage"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            name="price"
            placeholder="Price"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            name="bedrooms"
            placeholder="Bedrooms"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            name="bathrooms"
            placeholder="Bathrooms"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            name="pets"
            placeholder="Pets"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            name="image"
            placeholder="Image"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit} className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ApartmentNew;
