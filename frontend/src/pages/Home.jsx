import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Talkshow Ticketing</h1>
      <Link
        to="/order-seat"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Book Tickets
      </Link>
    </div>
  );
}
