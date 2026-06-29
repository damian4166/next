import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Witaj w mojej aplikacji Next.js! 👋</h1>
      <p className="text-lg text-gray-600">To jest moja pierwsza strona zbudowana na App Routerze.</p>
      <Link href="/o-nas" className="text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors">
        Przejdz do strony o nas
      </Link>
    </main>
  );
}