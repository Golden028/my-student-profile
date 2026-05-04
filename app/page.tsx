import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white text-black">
      <div className="max-w-2xl w-full border-2 border-blue-500 rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Student Profile</h1>
        
        <div className="space-y-4 text-lg">
          <p><strong>Name:</strong> Golden Christian Gondo</p>
          <p><strong>Student ID:</strong> [2341720216]</p>
          <p><strong>Major:</strong> Informatics Engineering (Polinema)</p>
          <p><strong>Tech Interests:</strong> UI/UX Design, Frontend Development, Full-stack (Laravel, Flutter, Next.js), and IoT.</p>
        </div>

        <div className="mt-8 pt-6 border-t">
          <h2 className="text-xl font-semibold mb-2">Projects:</h2>
          <ul className="list-disc ml-5">
            <li>NextStep (Internship Management Platform)</li>
            <li>Aetheris (Air Quality Control System)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}