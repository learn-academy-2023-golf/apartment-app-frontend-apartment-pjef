import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import mockUsers from "./mockUsers.js";
import mockApartments from "./mockApartments.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./pages/Home.js";
import SignUp from "./pages/Signup.js";
import SignIn from "./pages/SignIn.js";
import ApartmentIndex from "./pages/ApartmentIndex.js";
import ApartmentShow from "./pages/ApartmentShow.js";
import ApartmentNew from "./pages/ApartmentNew.js";
import ApartmentEdit from "./pages/ApartmentEdit.js";
import NotFound from "./pages/NotFound.js";
import ApartmentProtectedIndex from "./pages/ApartmentProtectedIndex.js";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [apartments, setApartments] = useState(mockApartments);
  const url = "http://localhost:3000"

  function handleAddApartment(newApartment) {
    setApartments((curr) => [...curr, newApartment]);
  }

  const handleEditApartment = (apartment, id) => {
    console.log(apartment.id);
    console.log(id);
  };

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        // store the token
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
      .then((payload) => {
        setCurrentUser(payload)
      })
      .catch((error) => console.log("login errors: ", error))
  }

  const logout = () => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"), //retrieve the token
      },
      method: "DELETE",
    })
      .then((payload) => {
        localStorage.removeItem("token") // remove the token
        setCurrentUser(null)
      })
      .catch((error) => console.log("log out errors: ", error))
  }
  

  
  

  return (
    <>
      <Header currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp signup={signup} />} />
        <Route path="/signin" element={<SignIn login={login} />} />
        <Route
          path="/index"
          element={<ApartmentIndex apartments={apartments} />}
        />
        {currentUser && (
          <Route
            path="/myapartments"
            element={
              <ApartmentProtectedIndex
                currentUser={currentUser}
                apartments={apartments}
              />
            }
          />
        )}
        <Route
          path="/show/:id"
          element={<ApartmentShow apartments={apartments} />}
        />
        <Route
          path="/new"
          element={<ApartmentNew handleAddApartment={handleAddApartment} />}
        />
        <Route
          path="/edit/:id"
          element={
            <ApartmentEdit
              apartments={apartments}
              handleEditApartment={handleEditApartment}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
