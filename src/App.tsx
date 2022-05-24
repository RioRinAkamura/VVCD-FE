import "animate.css";
import "antd/dist/antd.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import AboutDetail from "./components/AboutDetail";
import Auth from "./components/Auth";
import { Dashboard } from "./components/Dashboard";
import { BoatTicket } from "./components/Features.tsx/components/BoatTicket";
import { Home } from "./components/Home";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import Foods from "./pages/AdminPage/components/Foods";
import Places from "./pages/AdminPage/components/Places";
import Report from "./pages/AdminPage/components/Report";
import User from "./pages/AdminPage/components/User";
import BikeRentalPage from "./pages/BikeRentalPage";
import BookingTicketPage from "./pages/BookingTicketPage";
import BookingTourPage from "./pages/BookingTourPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import HotelBookingPage from "./pages/HotelBookingPage";
import UserPage from "./pages/UserPage";
import PrivateRoute from "./routing/PrivateRoute";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserPage />}>
          <Route path="/" element={<HomePage />} />
          <Route path="dat-ve" element={<BookingTicketPage />} />
          <Route path="dat-ve/ve-tau" element={<BoatTicket />} />
          <Route path="dat-tour" element={<BookingTourPage />} />
          <Route path="dat-phong-ks" element={<HotelBookingPage />} />
          <Route path="thue-xe" element={<BikeRentalPage />} />
          <Route path="thue-xe/xe-may" element={<BikeRentalPage />} />
          <Route path="ho-tro" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/:id" element={<AboutDetail />} />

          {/* <Route path="/vivucd" element={<HomePage />}>
            <Route path="/vivucd/:id" element={<AboutDetail />} />
          </Route> */}
        </Route>

        <Route path="/login" element={<Auth authRoute="login" />} />
        <Route path="/register" element={<Auth authRoute="register" />} />
        <Route element={<PrivateRoute />}>
          <Route path="admin" element={<AdminPage />}>
            <Route path="users" element={<User />} />
            <Route path="report" element={<Report />} />
            <Route path="places" element={<Places />} />
            <Route path="foods" element={<Foods />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

