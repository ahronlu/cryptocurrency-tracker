import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import CoinDetailPage from "./pages/CoinDetailPage";
import Header from "./components/Header";
import "./App.css";
import { WatchListContextProvider } from "./context/watchListContext";

function App() {
  return (
    <div className="container">
      <WatchListContextProvider>
        <Router>
          <Header />
          <Route exact path="/" component={CoinSummaryPage} />
          <Route path="/coins/:id" component={CoinDetailPage} />
        </Router>
      </WatchListContextProvider>
    </div>
  );
}

export default App;
