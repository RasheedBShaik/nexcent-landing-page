export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-[#4D4D4D]">404</h1>

        <p className="mt-4 text-lg text-[#717171]">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <a
          href="/"
          className="mt-8 inline-flex rounded-md bg-[#4CAF4F] px-8 py-3.5 text-white"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}