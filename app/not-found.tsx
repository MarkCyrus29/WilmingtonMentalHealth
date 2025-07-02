import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href={"/"}
        className="hover:cursor-pointer bg-primary py-3 px-6 rounded-xl text-xl !text-white shadow-lg transition-opacity hover:opacity-80"
      >
        Go Back
      </Link>
    </div>
  );
}
