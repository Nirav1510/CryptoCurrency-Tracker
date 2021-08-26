import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import CoinGecko from "../Apis/CoinGecko";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const [day, week, year, detail] = await Promise.all([
        CoinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "1",
          },
        }),
        CoinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "7",
          },
        }),
        CoinGecko.get(`/coins/${id}/market_chart/`, {
          params: {
            vs_currency: "inr",
            days: "365",
          },
        }),
        CoinGecko.get("/coins/markets/", {
            params: {
              vs_currency: "inr",
              ids: id, 
            },
          }),
      ]);
     
      //Promise.all() fuction call all apis the apis together
      //console.log(detail.data);
      //console.log(response.data);
      setCoinData({
        day: day.data.prices,
        week: week.data.prices,
        year: year.data.prices,
        detail: detail.data[0],
      });
    };
    fetchData();
  }, []);
  //console.log(coin);
  return <div>Detail</div>;
};

export default CoinDetailPage;
