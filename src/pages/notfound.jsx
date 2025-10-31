import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-gray-500 text-center max-w-md">
        Sorry, we couldn’t find the page you’re looking for. It might have been
        moved or deleted.
      </p>

      <Link
        to="/employer"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
