import React, { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { data } from "./data";
import { Box, Grid, Button } from "@material-ui/core";
import { ValueBar } from "../valueBar";
import bitcoin from "../../assets/bitcoin.png";
import ustd from "../../assets/ustd.png";
import ETH from "../../assets/ETH.png";
import HBD from "../../assets/HBD.png";
import info from "../../assets/info.png";
import menu from "../../assets/menu.png";
import { styles } from "./styles.js";
import { AmountBar } from "../amountBar";
import { UnclaimedReward } from "../unclaimedReward";
import ecency from "../../assets/ecency.png";
import pob from "../../assets/pob.png";
import pay from "../../assets/pay.png";
import { EcencyPoints } from "../ecencyPoints";
import Neo from "../../assets/Neo.png";
import ccc from "../../assets/ccc.png";
import xrp from "../../assets/xrp.png";

const ecencyPoints = [
  {
    amount: "217.750",
    points: "Ecency Points",
    image: ecency,
  },
  { amount: "$9.19/", name: "Pob", points: "33.827 POB", image: pob },
  { amount: "$0.73/", name: "PAY", points: "2,636.512 PAY", image: pay },
  { amount: "$0.00/", name: "NEOXAG", points: "2.154 NEOXAG", image: Neo },
  { amount: "$0.00/", name: "CCC", points: "0.929 CCC", image: ccc },
];
const ecencyMap = [
  {
    image: bitcoin,
    coinTitle: "Bitcoin",
    coinName: "BTC",
    numberOfCoin: "1 BTC",
    coinValue: "/$31.779,20",
    info: info,
    menuIcon: menu,
    amount: "$31.779,20",
    color: "#1B68DA",
    percentage: "-4,51%",
    Color: "#EB5757",
    arrow: "#EB5757",
  },
  {
    image: ETH,
    coinTitle: "ETH",
    coinName: "Etherum",
    numberOfCoin: "5.17 ETH",
    coinValue: "/$10.562",
    info: info,
    menuIcon: menu,
    amount: "$2.043,97 ",
    color: "#1B68DA",
    percentage: "-4,26%",
    Color: "#EB5757",
    arrow: "#EB5757",
  },
  {
    image: HBD,
    coinTitle: "HBD",
    coinName: "Hive dollar",
    numberOfCoin: "1.333 HBD",
    coinValue: "/$10.562",
    info: info,
    menuIcon: menu,
    amount: "$3.333 ",
    color: "#1B68DA",
    percentage: "-1%",
    Color: "#EB5757",
    arrow: "#EB5757",
  },
  {
    image: HBD,
    coinTitle: "High Power",
    numberOfCoin: "3.000 HP",
    info: info,
    menuIcon: menu,
  },
  {
    image: xrp,
    coinTitle: "XRP",
    coinName: "XRP",
    numberOfCoin: "1.333 HBD",
    coinValue: "/$10.562",
    info: info,
    menuIcon: menu,
    amount: "$3.333 ",
    color: "#1B68DA",
    percentage: "-1%",
    Color: "#EB5757",
    arrow: "#EB5757",
  },
  {
    image: HBD,
    coinTitle: "HIVE",
    coinName: "Hive token",
    numberOfCoin: "1 BTC",
    coinValue: "/$31.779,20",
    info: info,
    menuIcon: menu,
    amount: "$2.32",
    color: "#1B68DA",
    percentage: "+11%",
    Color: "#27AE60",
    arrow: "#27AE60",
  },
  {
    image: ustd,
    coinTitle: "USDT",
    coinName: "Tether USD",
    numberOfCoin: "230.50 USDT",
    coinValue: "/$230.494",
    info: info,
    menuIcon: menu,
    amount: "$0.99999",
    color: "#1B68DA",
    percentage: "-0,02%",
    Color: "#EB5757",
    arrow: "#EB5757",
  },
];

const EcencyChart = () => {
  let inititalChartOptions = {
    // To avoid unnecessary update keep all options in the state.
    chartOptions: {
      chart: {
        zoomType: "x",
        background: "linear-gradient( #357CE6, #97C1FF)",
        backgroundColor: "transparent",

        height: "15%",
      },
      title: {
        title: "",
        style: { display: "none" },
      },

      yAxis: {
        startOnTick: false,
        endOnTick: false,
        tickPositions: [],
        title: "",
        style: {
          display: "none",
        },
      },
      xAxis: {
        startOnTick: false,
        endOnTick: false,
        lineColor: "#99BFF4",
        tickPositions: [],
        title: "",
        style: {
          display: "none",
        },
      },
      credits: {
        enabled: false,
      },

      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get("rgba"),
              ],
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },

      series: [
        {
          type: "area",
          name: "USD to EUR",
          data: data,
        },
      ],
    },
    hoverData: null,
  };
  const [showList, setShowList] = useState(false);
  return (
    <div>
      <Grid container>
        <Grid item lg={3}></Grid>
        <Grid item lg={6}>
          <UnclaimedReward onOptionClick={setShowList} />

          {!showList &&
            ecencyMap.map((item) => (
              <Box style={styles.container}>
                <ValueBar
                  image={item.image}
                  coinTitle={item.coinTitle}
                  coinName={item.coinName}
                  numberOfCoin={item.numberOfCoin}
                  coinValue={item.coinValue}
                  info={item.info}
                  menuIcon={item.menuIcon}
                />
                <HighchartsReact
                  highcharts={Highcharts}
                  options={inititalChartOptions.chartOptions}
                />
                <AmountBar
                  amount={item.amount}
                  color={item.color}
                  percentage={item.percentage}
                  Color={item.Color}
                  arrow={item.arrow}
                />
              </Box>
            ))}
          {showList &&
            ecencyPoints.map((item) => (
              <EcencyPoints
                image={item.image}
                name={item.name}
                amount={item.amount}
                point={item.points}
                backgroundColor={item.backgroundColor}
              />
            ))}
          <Box>
            <Box style={styles.backgroundColor}>
              <Button style={styles.addButton}>Add More</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </div>
  );
};

export default EcencyChart;
