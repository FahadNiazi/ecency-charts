import { Box, makeStyles } from "@material-ui/core";
import infoBlack from "../../assets/infoBlack.png";
import menuBlack from "../../assets/menuBlack.png";
import React from "react";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#E5EFFC",
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    color: "#202020",
    fontSize: 16,
    fontWeight: 500,
    marginLeft: 10,
  },
  amount: {
    color: "#27AE60",
    fontSize: 16,
    fontWeight: 500,
  },
  point: {
    color: "#357CE6",
    fontSize: 16,
    fontWeight: 500,
  },
  display: {
    display: "flex",
    alignItems: "center",
  },
});
export const EcencyPoints = ({ image, amount, point, name }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.display}>
        <Box>
          <img src={image} alt="" />
        </Box>

        <Box className={classes.name}>{name}</Box>
      </Box>
      <Box className={classes.display}>
        <Box className={classes.amount}>{amount}</Box>

        <Box className={classes.point}>{point}</Box>
      </Box>
      <Box className={classes.display}>
        <Box>
          <img src={infoBlack} alt="" />
        </Box>
        <Box>
          <img src={menuBlack} alt="" />
        </Box>
      </Box>
    </Box>
  );
};
