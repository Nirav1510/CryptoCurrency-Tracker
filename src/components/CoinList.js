import React, { useEffect, useState } from "react";
import CoinGecko from "../Apis/CoinGecko";

const CoinList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await CoinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: "bitcoin,ethereum",
        },
      });
      console.log(response.data);
      setCoins(response.data);

    };
    fetchData();
  }, []);

  return <div>List</div>;
};

export default CoinList;
