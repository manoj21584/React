import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigate("/about");
  };

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div>
      Home
      <button onClick={handleNavigateToAbout}>About</button>
      <button onClick={handleNavigateToContact}>Contact</button>
    </div>
  );
}

export default Home;
