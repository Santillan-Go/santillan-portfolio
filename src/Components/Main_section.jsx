function Main_section({ language }) {
  return (
    <section className="p-6 lg:p-12 max-w-6xl mx-auto flex justify-center  flex-col lg:flex-row items-center gap-12">
      {/* Left Side - Image & Intro */}
      <div className="relative w-60 h-60 lg:w-72 lg:h-72 flex-shrink-0">
        <img
          src="santillan.jpg"
          alt="santillan-developer"
          className="w-full h-full object-cover rounded-full shadow-lg border-4 border-blue-600"
        />
        <div className="absolute bottom-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-sm font-medium">
          {language ? "Desarrollador Full-Stack" : "Full-Stack Developer"}
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col space-y-6 text-center lg:text-left max-w-lg">
        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          {language ? "Hola, soy Santillan" : "Hi, I'm Santillan"}
        </h1>

        <p className="text-lg text-gray-700 dark:text-gray-300">
          {language
            ? "Apasionado por la tecnología y el desarrollo web. Siempre explorando nuevas formas de mejorar mis habilidades."
            : "Passionate about technology and web development. Always exploring new ways to improve my skills."}
        </p>

        {/* Buttons & Social Links */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <a
            href="santillan_cv.pdf"
            target="_blank"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            {language ? "Descargar CV" : "Download CV"}
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-santillan-70b4522b0"
            target="_blank"
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-all"
          >
            <img src="linkedin.svg" alt="linkedin" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/Santillan-Go"
            target="_blank"
            className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md transition-all"
          >
            <img src="gitlight.svg" alt="github" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main_section;
