import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import CoinGecko from "../Apis/CoinGecko";

const CoinDetailPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
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
        setIsLoading(false),
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

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div className="coinlist">
        <HistoryChart />
        <CoinData />
      </div>
    );
  };

  return renderData();
};

export default CoinDetailPage;
