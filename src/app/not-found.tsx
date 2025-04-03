import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center p-12 bg-pink-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-600">404 - Page Not Found</h1>
      <p className="text-pink-500 mt-4">
        Oh no! We couldn&apos;t find your plushy friend.
      </p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
      >
        Go back to the plushy home
      </Link>
    </div>
  );
}
