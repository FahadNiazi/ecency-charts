import { Box, makeStyles } from "@material-ui/core";

import React from "react";
const useStyles = makeStyles({
  coinTitle: {
    color: "#357CE6",
    fontSize: 16,
    fontWeight: 400,
  },
  numberOfCoin: {
    color: "#1B68DA",
    fontWeight: 500,
    fontSize: 16,
  },
  coinValue: {
    color: "#357CE6",
    fontWeight: 400,
    fontSize: 16,
  },
  dFlex: {
    display: "flex",
  },
  textAlign: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export const ValueBar = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.textAlign}>
      <Box display="flex" alignItems="center">
        <Box>{<img src={props.image} alt="" />}</Box>
        <Box marginLeft="10px">
          <Box className={classes.coinTitle}>{props.coinTitle}</Box>
          <Box className={classes.coinTitle}>{props.coinName}</Box>
        </Box>
      </Box>
      <Box display="flex">
        <Box className={classes.numberOfCoin}>{props.numberOfCoin}</Box>
        <Box className={classes.coinValue}>{props.coinValue}</Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Box>{<img src={props.info} alt="" />}</Box>
        <Box marginLeft="20px"> {<img src={props.menuIcon} alt="" />}</Box>
      </Box>
    </Box>
  );
};
