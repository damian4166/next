import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-xl margin-auto p-8 bg-white shadow-md rounded-lg mt-10 mx-auto">
      <h1 className="text-3xl font-bold text-blue-600">O nas</h1>
      <p className="mt-4 mb-6 text-gray-700">
        Jesteśmy uczestnikami kursu Next.js. Ta podstrona powstała automatycznie dzięki strukturze folderów!
      </p>
      <Link href="/" className="text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors">
        ← Wróć na stronę główną
      </Link>
    </div>
  );
}