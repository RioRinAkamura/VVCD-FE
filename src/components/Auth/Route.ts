import BikeRentalPage from "../../pages/BikeRentalPage";
import BookingTicketPage from "../../pages/BookingTicketPage";
import BookingTourPage from "../../pages/BookingTourPage";
import ContactPage from "../../pages/ContactPage";
import FaqPage from "../../pages/FaqPage";
import HomePage from "../../pages/HomePage";
import HotelBookingPage from "../../pages/HotelBookingPage";
import { Dashboard } from "../Dashboard";

export const publicRoutes = [
  { path: "/", component: HomePage },
  { path: "/dat-ve", component: BookingTicketPage },
  { path: "/dat-phong-ks", component: HotelBookingPage },
  { path: "/dat-tour", component: BookingTourPage },
  { path: "/thue-xe", component: BikeRentalPage },
  { path: "/ho-tro", component: ContactPage },
  { path: "/faq", component: FaqPage },
];

export const privateRoutes = [{ path: "/admin", component: Dashboard }];
