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

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
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
        <Route path="/new" element={<ApartmentNew />} />
        <Route path="/edit" element={<ApartmentEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
