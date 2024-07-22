function Main_section({ language }) {
  return (
    <section className="p-4 lg:p-10 flex lg:flex-row flex-col sm:gap-8 gap-16 justify-evenly">
      <article className="flex flex-col basis-1/2  ">
        <figure className="flex flex-col text-center lg:text-left">
          <figcaption className="flex lg:flex-row lg:justify-evenly flex-col gap-3">
            <img
              src="santillan.jpg"
              alt="santillan-developer"
              className="rounded-full w-20 h-20 lg:mr-0 lg:ml-0 mr-auto ml-auto"
            />

            <div className="s-article-div-1 text-center">
              <h2 className="h2-1 lg:text-3xl sm:text-2xl  font-bold">
                {language ? "Hola, soy Santillan." : "HI, I am santillan."}
              </h2>
              <h2 className="h2-2 lg:text-4xl sm:text-2xl font-bold">
                {language
                  ? "Dessarrollador Full-Stack"
                  : "   Full-Stack Developer"}
              </h2>
            </div>
          </figcaption>

          <div className="s-article-div-2 flex flex-col justify-evenly">
            <h2 className=" lg:text-xl p-2">
              {language
                ? "Estoy apasionado por el mundo de la programación."
                : "I am  passionate about the world of programming."}
            </h2>
            <p className="p-2 lg:text-xl">
              {language
                ? " Me encanta aprender para mejorar mis habilidades y actualmente estoy perfeccionando mis conocimientos."
                : " I love learning to improve my skills and I am currently refining my knowledge."}
            </p>
            <nav className="flex justify-evenly">
              <a
                href="santillan.pdf"
                target="_blank"
                className="border rounded wave-button border-gray-300 p-2 sm:w-40 w-28 text-sm font-semibold  flex items-center justify-center"
              >
                <p>Currículum</p>
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-santillan-70b4522b0"
                target="_blank"
                className="border rounded border-gray-300 p-2"
              >
                <img
                  src="linkedin.svg"
                  alt="linkedin"
                  className="w-8 h-8 rounded bg-white"
                />
              </a>
              <a
                href="https://github.com/Santillan-Go"
                target="_blank"
                className="border rounded border-gray-300 p-2"
              >
                <img
                  src="gitlight.svg"
                  alt="github"
                  className="w-8 h-8 bg-white rounded"
                />
              </a>
            </nav>
          </div>
        </figure>
      </article>
      <article className="s-article-2 flex flex-col basis-1/2  gap-2 items-center  text-center lg:text-left ">
        {/* <h2 className="lg:text-3xl text-center font-medium">
          {language
            ? "Me esfuerzo constantemente por crecer porque realmente disfruto el proceso de aprendizaje."
            : "Now I am improving my skills."}
        </h2> */}
        <h3 className="lg:text-xl w-full text-center ">
          {language
            ? "Estoy constantemente esforzándome por crecer porque realmente disfruto el proceso de aprendizaje."
            : `
            I am constantly striving to grow because I genuinely enjoy the learning process.
            `}
        </h3>
        <h4 className="lg:text-xl text-center">
          {language
            ? "También doy prioridad a desarrollar mis habilidades blandas."
            : "I also prioritize developing my soft skills."}
        </h4>
      </article>
    </section>
  );
}

export default Main_section;
