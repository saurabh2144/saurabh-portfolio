
import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 py-10 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Saurabh Singh</h1>
        <p className="text-xl mt-2">Full Stack Java Developer</p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">👨‍💼 About Me</h2>
        <p>
          I'm a passionate Full Stack Java Developer from Lucknow. I build robust backend systems using Spring Boot and dynamic frontends with React. Eager to solve real-world problems through code.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">🛠 Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Frontend:</h3>
            <ul className="list-disc ml-5">
              <li>React JS</li>
              <li>HTML5, CSS3</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Backend:</h3>
            <ul className="list-disc ml-5">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MySQL</li>
              <li>REST API</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📂 Projects</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold">1. Megan Voice Assistant</h3>
            <p>Java + Spring Boot + React + OpenAI</p>
            <a className="text-blue-400 underline" href="https://github.com/saurabh2144/megan-assistant" target="_blank" rel="noreferrer">GitHub Link</a>
          </div>
          <div>
            <h3 className="text-lg font-bold">2. Library Management System</h3>
            <p>Spring Boot + React + MySQL</p>
            <a className="text-blue-400 underline" href="https://github.com/saurabh2144/library-management" target="_blank" rel="noreferrer">GitHub Link</a>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📄 Resume</h2>
        <a className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded" href="/Saurabh-Singh-Resume.pdf" download>Download Resume</a>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-b pb-1">📞 Contact</h2>
        <ul>
          <li>Email: itsmesaurabh214@gmail.com</li>
          <li>Phone: 9598150940</li>
          <li>Location: Lucknow, Uttar Pradesh</li>
          <li>LinkedIn: <a className="text-blue-400 underline" href="https://www.linkedin.com/in/saurabh-singh-a53764293/" target="_blank" rel="noreferrer">View Profile</a></li>
        </ul>
      </section>

      <footer className="text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Saurabh Singh. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
