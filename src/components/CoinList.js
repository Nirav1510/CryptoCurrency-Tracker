import React, { useContext, useEffect, useState } from "react";
import CoinGecko from "../Apis/CoinGecko";
import { WatchListContext } from "../Context/WatchListContext";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { watchList } = useContext(WatchListContext);
  console.log(watchList);


  useEffect(() => {
    const fetchData = async () => {
      const {data} = await CoinGecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: watchList.join(","), // array method that join element seperated by ','
        },
      });
      console.log(data);
      setCoins(data);
    };
    fetchData();
  }, []);

  return <div>List</div>;
};

export default CoinList;
