export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white h-screen ">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mt-3 text-lg text-white/70">
        Siz qidirgan sahifa topilmadi.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg"
      >
        Bosh sahifaga qaytish
      </a>
    </div>
  );
}
