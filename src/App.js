import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CoinDetailPage from "./Pages/CoinDetailPage";
import CoinSummaryPage from "./Pages/CoinSummaryPage";
import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./Context/WatchListContext";

const App = () => {
  return (
    <WatchListContextProvider>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={CoinSummaryPage} />
      </BrowserRouter>
    </WatchListContextProvider>
  );
};

export default App;
