import { Box, Button, makeStyles } from "@material-ui/core";
import infoBlack from "../../assets/infoBlack.png";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import KeyboardArrowDownSharpIcon from "@material-ui/icons/KeyboardArrowDownSharp";
import MenuIcon from "@material-ui/icons/Menu";
import zigzag from "../../assets/zigzag.svg";
import React, { useState } from "react";

const useStyles = makeStyles({
  container: {
    border: "1px solid #EBF2FC",
    borderColor: "#EBF2FC",
    backgroundColor: "#EBF2FC",
    marginTop: 29,
    borderRadius: 10,
    boxShadow: " #99BFF4 5px 6px",
  },
  flexAlign: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
    paddingTop: 12,
  },

  addButton: {
    backgroundColor: "#357CE6",

    "&:hover": {
      backgroundColor: "#357CE6",
    },
    color: "#FFFFFF",
    fontWeight: 400,
    fontSize: 16,
    textTransform: "capitalize",
    borderRadius: 20,
    width: 160,
  },
  reward: {
    fontSize: 21,
    color: " #202020",
    fontWeight: "bold",
  },
  points: {
    color: "#788187",
    fontSize: 21,
    fontWeight: 400,
  },
  dFlex: {
    display: "flex",
    alignItems: "center",
  },
  iconStyling: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: 30,
    marginTop: 10,
  },
  searchIcon: {
    border: "1px solid #C1C5C7",
    borderRadius: 20,
    width: 45,
    display: "flex",
    justifyContent: "center",
    padding: 5,
    color: "#202020",
    alignItems: "center",
  },
  dropDown: {
    border: "1px solid #C1C5C7",
    borderRadius: 28,
    width: 194,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 3,
    paddingLeft: 15,
    marginLeft: 15,
  },
  filterStyling: {
    fontWeight: 400,
    fontSize: 16,
    color: "#202020",
  },
  addToken: {
    border: "1px solid #C1C5C7",
    borderRadius: 28,
    width: 130,
    textAlign: "center",
    padding: 12,
    paddingLeft: 15,
    marginLeft: 15,
  },
  zigzagButton: {
    padding: 8,
    backgroundColor: "black",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    border: "1px solid #C1C5C7",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  menuButton: {
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    color: "#788187",
    border: "1px solid #C1C5C7",
    padding: 8,
  },
  zigzagIcon: {
    width: "100%",
    height: "100%",
    padding: 4,
  },
  mt: {
    display: "flex",
    marginTop: 26,
    alignItems: "center",
  },
  menuIcon: {
    display: "flex",
    marginLeft: 15,
  },
});

export const UnclaimedReward = ({ onOptionClick: setShowList }) => {
  const [active, setActive] = useState("chart");
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.container}>
        <Box className={classes.iconStyling}>
          <img src={infoBlack} alt="" />
        </Box>
        <Box className={classes.flexAlign}>
          <Box display="flex">
            <Box className={classes.reward}>Unclaimed Rewards:</Box>
            <Box className={classes.points}>126.349 points</Box>
          </Box>
          <Box>
            <Button disableRipple className={classes.addButton}>
              Claim Reward
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className={classes.mt}>
        <Box className={classes.searchIcon}>
          <SearchSharpIcon fontSize="medium" />
        </Box>
        <Box className={classes.dropDown}>
          <Box className={classes.filterStyling}>Filter</Box>
          <KeyboardArrowDownSharpIcon fontSize="large" />
        </Box>
        <Box className={classes.menuIcon}>
          <Box>
            <Button
              onClick={() => {
                setActive("chart");
                setShowList(false);
              }}
              style={{
                backgroundColor: active === "chart" ? "black" : "white",
              }}
              className={classes.zigzagButton}
            >
              <img className={classes.zigzagIcon} src={zigzag} alt="" />
            </Button>
          </Box>
          <Box>
            <Button
              className={classes.menuButton}
              onClick={() => {
                setActive("list");
                setShowList(true);
              }}
              style={{
                backgroundColor: active === "list" ? "black" : "white",
              }}
            >
              <MenuIcon />
            </Button>
          </Box>
        </Box>
        <Box className={classes.addToken}>
          <Box className={classes.filterStyling}>Add new token</Box>
        </Box>
      </Box>
    </Box>
  );
};
