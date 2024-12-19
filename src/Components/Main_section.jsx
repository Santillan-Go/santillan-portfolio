function Main_section({ language }) {
  return (
    <section className="p-4 lg:p-10 max-w-7xl mx-auto flex lg:flex-row flex-col sm:gap-8 gap-16 justify-evenly">
      <article className="blur-card rounded-2xl flex flex-col basis-1/2 lg:pr-12 p-4">
        <figure className="flex flex-col">
          <figcaption className="flex lg:flex-row items-center lg:justify-start flex-col gap-5 mb-8">
            <img
              src="santillan.jpg"
              alt="santillan-developer"
              className="rounded-full w-24 h-24 lg:w-28 lg:h-28 object-cover transition-transform hover:scale-105"
            />

            <div className="space-y-2">
              <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-white bg-clip-text text-transparent">
                {language ? "Hola, soy Santillan." : "Hi, I'm Santillan."}
              </h2>
              <h2 className="text-2xl lg:text-4xl font-bold">
                {language ? "Desarrollador Full-Stack" : "Full-Stack Developer"}
              </h2>
            </div>
          </figcaption>

          <div className="space-y-6">
            <h2 className="text-lg lg:text-xl">
              {language
                ? "Estoy apasionado por el mundo de la programación."
                : "I am passionate about the world of programming."}
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
              {language
                ? "Me encanta aprender para mejorar mis habilidades y actualmente estoy perfeccionando mis conocimientos."
                : "I love learning to improve my skills and I am currently refining my knowledge."}
            </p>

            <nav className="flex gap-4 items-center">
              <a
                href="santillan.pdf"
                target="_blank"
                className=" skeleton px-6 py-3 bg-gradient-to-r from-blue-600 to-slate-900 text-white rounded-lg 
                          transition-all hover:shadow-lg hover:scale-105 font-medium"
              >
                Currículum
              </a>

              <a
                href="https://www.linkedin.com/in/carlos-santillan-70b4522b0"
                target="_blank"
                className="p-2 rounded-lg border border-gray-300 hover:border-blue-500  bg-slate-300 transition-all hover:shadow-lg hover:scale-110 font-medium"
              >
                <img
                  src="linkedin.svg"
                  alt="linkedin"
                  className="w-8 h-8 rounded "
                />
              </a>
              <a
                href="https://github.com/Santillan-Go"
                target="_blank"
                className="p-2 rounded-lg border border-gray-300 hover:border-blue-500
                 bg-slate-300 transition-all hover:shadow-lg hover:scale-110 font-medium"
              >
                <img
                  src="gitlight.svg"
                  alt="github"
                  className="w-8 h-8 rounded"
                />
              </a>
            </nav>
          </div>
        </figure>
      </article>

      <article className="blur-card rounded-2xl flex flex-col basis-1/2 justify-center space-y-6 lg:pl-12 p-4 border-l-0 ">
        <h3 className="text-xl lg:text-2xl font-medium">
          {language
            ? "Estoy constantemente esforzándome por crecer porque realmente disfruto el proceso de aprendizaje."
            : "I am constantly striving to grow because I genuinely enjoy the learning process."}
        </h3>
        <h4 className="text-lg lg:text-xl text-gray-700 dark:text-gray-300">
          {language
            ? "También doy prioridad a desarrollar mis habilidades blandas."
            : "I also prioritize developing my soft skills."}
        </h4>
      </article>
    </section>
  );
}

export default Main_section;
