import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderSeat from "./pages/OrderSeat";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order/:eventId" element={<OrderSeat />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
