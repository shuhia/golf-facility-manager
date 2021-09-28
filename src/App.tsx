import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import { Facility, FacilityType } from "./utils/facility";
import FacilityCards from "./components/cards/FacilityCards";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  // Fake facilities
  const [facilities, setFacilities]: [Facility[], any] = useState([
    {
      id: "1",
      createdAt: "2421312",
      name: "Alex's golf ",
      type: FacilityType.range,
      address: "Adress",
    },
    {
      id: "1",
      createdAt: "2421312",
      name: "Alex's golf ",
      type: FacilityType.range,
      address: "Adress",
    },
    {
      id: "1",
      createdAt: "2421312",
      name: "Alex's golf ",
      type: FacilityType.range,
      address: "Adress",
    },
    {
      id: "1",
      createdAt: "2421312",
      name: "Alex's golf ",
      type: FacilityType.range,
      address: "Adress",
    },
  ]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <FacilityCards facilities={facilities}></FacilityCards>
      </main>
    </div>
  );
}

export default App;
