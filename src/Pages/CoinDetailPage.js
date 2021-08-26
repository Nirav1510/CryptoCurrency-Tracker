import React from "react";
import { useParams } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";

const CoinDetailPage = () => {
  const { id } = useParams();

  return <div>Detail</div>;
};

export default CoinDetailPage;
