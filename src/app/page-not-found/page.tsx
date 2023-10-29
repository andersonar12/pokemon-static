import Link from 'next/link';

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">Go back to homepage</a>
      </Link>
    </div>
  );
}