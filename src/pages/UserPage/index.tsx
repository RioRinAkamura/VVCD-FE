import { Layout } from "antd";
import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { AppFooter } from "../../components/common/AppFooter";
import { AppHeader } from "../../components/common/AppHeader";
import ScrollToTop from "../../components/ScrollToTop";
import BookingTicketPage from "../BookingTicketPage";
import HomePage from "../HomePage";
import HotelBookingPage from "../HotelBookingPage";

const { Footer } = Layout;

type Props = {};

const UserPage = (props: Props) => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <ScrollToTop />

      <Footer>
        <AppFooter />
      </Footer>
    </>
  );
};

export default UserPage;
