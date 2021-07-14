import { useState, useEffect } from "react";
import "normalize.css";
import styled from "styled-components";

const Main = styled.div`
  margin: 0;
  padding: 0 0.5em;
  width: 100%;
  min-height: 100vh;
  background: #f72585;
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    max-width: 64em;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .application-title {
    margin: 0;
    padding: 1rem 0;
    font-family: "Open Sans";
    color: #fff;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  margin: 0;
  padding: 0.25em;
  height: 2.25em;
  width: 75%;
  background: transparent;
  color: #fff;
  border: solid 2px #fff;
  border-radius: 0.25em;
  font-family: "Roboto";
  outline: none;
  &::placeholder {
    color: #fff;
  }
`;

const Button = styled.button`
  margin: 0 0.25em;
  padding: 0.25em;
  height: 2.25em;
  width: 100%;
  max-width: ${({ buttonMaxWidth }) =>
    buttonMaxWidth
      ? buttonMaxWidth.toLowerCase() === "full"
        ? "100%"
        : buttonMaxWidth
      : "15em"};
  background ${({ buttonType }) =>
    buttonType
      ? buttonType.toLowerCase() === "primary"
        ? "#7209b7"
        : buttonType.toLowerCase() === "danger"
        ? "#FF0000"
        : "#4CC9F0"
      : "#4CC9F0"};
  color: #fff;
  border: solid 2px ${({ buttonType }) =>
    buttonType
      ? buttonType.toLowerCase() === "primary"
        ? "#7209b7"
        : buttonType.toLowerCase() === "danger"
        ? "#FF0000"
        : "#4CC9F0"
      : "#4CC9F0"};
  border-radius: 0.25em;
  font-family: "Roboto";
  cursor: pointer;
`;

const Card = styled.div`
  margin: 0.5em 0;
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 1em;
  .address-span {
    font-family: "Open Sans";
    font-weight: 900;
    margin: 0.5em 0;
  }
  .btn-container {
    display: flex;
  }
`;

function App() {
  const [addresses, setAddresses] = useState({
    locations: [],
  });

  const [formData, setFormData] = useState({
    address: "",
  });

  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddresses((prevState) => ({
      ...prevState,
      locations: [...prevState.locations, formData],
    }));
  };

  return (
    <Main>
      <div className="wrapper">
        <h1 className="application-title">VRO Route Optimizer</h1>
        <Form onSubmit={handleSubmit}>
          <Input
            type="address"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
          />
          <Button buttonType="Primary" type="submit">
            Add To Route
          </Button>
        </Form>
        {addresses.locations.map((location) => (
          <Card>
            <span className="address-span">{location.address}</span>
            <div className="btn-container">
              <Button>Navigate</Button>
              <Button buttonType="Danger">Remove</Button>
            </div>
          </Card>
        ))}
        {addresses.locations.length > 1 ? (
          <Button buttonMaxWidth="full" buttonType="Primary">
            Optimize Route
          </Button>
        ) : null}
      </div>
    </Main>
  );
}

export default App;
