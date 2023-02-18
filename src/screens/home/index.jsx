import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components";

import "./styles.js";

function HomeScreen() {
  const navigate = useNavigate();

  function onClickProfile() {
    navigate("/profile");
  }

  return (
    <div>
      <Button text="Perfil" onClick={onClickProfile} />
    </div>
  );
}

export { HomeScreen };
