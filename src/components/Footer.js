import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary p-1 fixed-bottom text-light text-center">
      <small>&copy; Apartment App | {new Date().getFullYear()}</small>
    </footer>
  );
};

export default Footer;
