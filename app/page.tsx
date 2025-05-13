
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#050b1f] to-[#1a2950] text-white p-6">
      <div className="flex justify-between items-center w-full max-w-6xl mb-12">
        <h1 className="text-5xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
          Zoomer
        </h1>
        <div className="flex space-x-6">
          <Link href="/sign-in" className="text-lg font-medium hover:text-yellow-400 transition-colors">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-lg font-medium hover:text-yellow-400 transition-colors">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="text-center max-w-4xl mb-12">
        <h2 className="text-4xl font-semibold mb-6">Zoom Clone App</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Meet, collaborate, and innovate with Zoomer.
        </p>
        <div className="flex justify-center space-x-6">
          <Link href='/home' className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors shadow-md">
            Join a Meeting
          </Link>
          <Link href="/home" className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition-colors shadow-md">
            Schedule a Meeting
          </Link>
        </div>
      </div>
      
      <div className="text-center max-w-6xl mx-auto mb-16">
  <h2 className="text-4xl font-bold mb-10 text-yellow-300">Meet Our Visionary Team</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    {[
      {
        name: "Anubhav Singh",
        role: "Frontend / Authentication / Video Conferencing",
        img: "/images3.jpg",
      },
      {
        name: "Dhruv Pratap Singh",
        role: "Frontend / Authentication / Video Conferencing",
        img: "/images/IMG20250513173614.jpg",
      },
      {
        name: "Anuj Kaushik",
        role: "",
        img: "/images2.jpg",
      },
      {
        name: "Saksham Agrawal",
        role: "",
        img: "/images1.jpg",
      },
    ].map((member, index) => (
      <div
        key={index}
        className="bg-white bg-opacity-10 p-8 rounded-2xl text-center shadow-xl transform transition duration-300 hover:scale-105"
      >
        <Image
          src={member.img}
          alt={member.name}
          width={140}
          height={140}
          className="rounded-full mx-auto mb-5 border-4 border-yellow-300"
        />
        <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{member.name}</h3>
        <p className="text-gray-200 text-sm">{member.role}</p>
      </div>
    ))}
  </div>
</div>

      <footer className="mt-auto text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Zoomer. Redefining communication for the future.</p>
      </footer>
    </main>
  );
}
