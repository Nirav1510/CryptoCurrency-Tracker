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
      const responseDay = await CoinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "inr",
          days: "1",
        },
      });
      const responseWeek = await CoinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "inr",
          days: "7",
        },
      });
      const responseYear = await CoinGecko.get(`/coins/${id}/market_chart/`, {
        params: {
          vs_currency: "inr",
          days: "365",
        },
      });

      //console.log(response.data);
      setCoinData({
        day: responseDay.data.prices,
        week: responseWeek.data.prices,
        year: responseYear.data.prices,
      });
    };
    fetchData();
  }, []);
  //console.log(coin);
  return <div>Detail</div>;
};

export default CoinDetailPage;
