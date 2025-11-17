export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate full-stack developer with a love for creating elegant solutions
              to complex problems. With experience in modern web technologies, I specialize in
              building scalable and performant applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Experience</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">3+ Years</p>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">50+ Completed</p>
              </div>
              <div className="bg-blue-50 dark:bg-gray-800 px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">Clients</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">20+ Happy</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 italic">Your Photo Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
