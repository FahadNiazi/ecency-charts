import { Box } from "@material-ui/core";
import React from "react";
import EcencyChart from "../../components/ecencyChart";
import zigzag from "../../assets/zigzag.svg";
export const LandingPage = () => {
  return (
    <Box>
      <Box>
        <EcencyChart />
        <img src={zigzag} />
      </Box>
    </Box>
  );
};
