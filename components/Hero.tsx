export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Full Stack Developer | Designer | Problem Solver
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I build exceptional digital experiences that make people&apos;s lives easier.
            Passionate about creating beautiful, functional, and user-friendly applications.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
