import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const useStyles = makeStyles({
  Dflex: {
    display: "flex",
    justifyContent: "space-between",
  },
  textAlign: {
    display: "flex",
    alignItems: "center",
  },
});
export const AmountBar = ({ color, amount, percentage, Color, arrow }) => {
  const classes = useStyles();
  return (
    <Box className={classes.Dflex}>
      <Box marginLeft="10px" color={color}>
        {amount}
      </Box>

      <Box className={classes.textAlign}>
        {arrow && (
          <Box color={arrow}>
            <ArrowDropDownIcon fontSize="large" />
          </Box>
        )}
        <Box color={Color}>{percentage}</Box>
      </Box>
    </Box>
  );
};
