import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white flex">
      <aside className="w-64 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg mr-8 transition-transform transform hover:scale-105">
        <nav className="flex flex-col space-y-4">
          <a href="#about" className="text-lg font-semibold hover:underline hover:text-blue-300 transition-colors">About Me</a>
          <a href="#skills" className="text-lg font-semibold hover:underline hover:text-blue-300 transition-colors">Technical Skills</a>
          <a href="#projects" className="text-lg font-semibold hover:underline hover:text-blue-300 transition-colors">Projects</a>
          <a href="#publications" className="text-lg font-semibold hover:underline hover:text-blue-300 transition-colors">Publications</a>
          <a href="#contact" className="text-lg font-semibold hover:underline hover:text-blue-300 transition-colors">Contact Me</a>
        </nav>
      </aside>
      <main className="max-w-4xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg shadow-lg flex-1">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-4xl font-bold mb-4">Personal Website</h1>
          <p className="text-center sm:text-left mb-8">
            Hi, I'm Happiness, a software developer specializing in building
            exceptional digital experiences. Currently, I'm focused on building
            accessible, human-centered products at XYZ Company.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-8">
          <section id="about" className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md flex-1 min-w-[300px] hover:bg-opacity-30 transition-all">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p>
              I have over 10 years of experience in software development, working with a variety of technologies and industries. I am passionate about creating high-quality, user-friendly applications.
            </p>
          </section>

          <section id="skills" className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md flex-1 min-w-[300px] hover:bg-opacity-30 transition-all">
            <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>HTML / CSS / SASS</li>
              <li>Git / GitHub</li>
              <li>SQL / NoSQL Databases</li>
              <li>RESTful APIs / GraphQL</li>
              <li>Docker / Kubernetes</li>
            </ul>
          </section>

          <section id="projects" className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md flex-1 min-w-[300px] hover:bg-opacity-30 transition-all">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  className="text-blue-300 hover:underline"
                  href="https://project1.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project 1
                </a>
                - A brief description of Project 1.
              </li>
              <li>
                <a
                  className="text-blue-300 hover:underline"
                  href="https://project2.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project 2
                </a>
                - A brief description of Project 2.
              </li>
            </ul>
          </section>

          <section id="publications" className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md flex-1 min-w-[300px] hover:bg-opacity-30 transition-all">
            <h2 className="text-2xl font-semibold mb-4">Publications</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  className="text-blue-300 hover:underline"
                  href="https://publication1.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Publication 1
                </a>
                - A brief description of Publication 1.
              </li>
              <li>
                <a
                  className="text-blue-300 hover:underline"
                  href="https://publication2.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Publication 2
                </a>
                - A brief description of Publication 2.
              </li>
            </ul>
          </section>

          <section id="contact" className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md flex-1 min-w-[300px] hover:bg-opacity-30 transition-all">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p>
              Feel free to reach out to me via email at <a href="mailto:john.doe@example.com" className="text-blue-300 hover:underline">john.doe@example.com</a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
