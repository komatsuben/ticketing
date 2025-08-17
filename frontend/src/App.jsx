import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderSeat from "./pages/OrderSeat";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import Event from "./pages/Event";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order-seat" element={<OrderSeat />} />
      <Route path="/event" element={<Event />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
    </>
  );
}
