import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import starList from "/src/mocks/starList";
import slides from "/src/mocks/gallery";
import buyOptions from "/src/mocks/buyOptions";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import MainPage from "../pages/main-page/main-page";
import BuyPage from "../pages/buy-page/buy-page";
import ScrollToTop from "../ui/scrollToTop/scrollToTop";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage slides={slides} buyOptions={buyOptions} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
