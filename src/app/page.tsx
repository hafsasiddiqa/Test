import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full bg-white shadow-md">
      <nav className="container mx-auto p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Test</div>
     <ul className="flex space-x-4">
      <Link href={"/"} className="text-gray-700 hover:text-gray-900">Home</Link>
      <Link href={"/about"} className="text-gray-700 hover:text-gray-900">About</Link>
      <Link href={"/services"} className="text-gray-700 hover:text-gray-900">Services</Link>
      <Link href={"/contact"} className="text-gray-700 hover:text-gray-900">Contact</Link>
      </ul>
    </nav>
      </header>
      
      <main className="container mx-auto flex flex-col items-center justify-center flex-1 p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center">
          Welcome to Our Website
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-600 text-center">
          We provide exceptional services to help you grow your business.
        </p>
        <div className="mt-8 flex space-x-4">
          <Link href={"/about"} className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Learn More
          </Link>
          <Link href={"/contact"} className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
            Get in Touch
          </Link>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Test. All rights reserved.</p>
      </footer>
    </div>
  );
}