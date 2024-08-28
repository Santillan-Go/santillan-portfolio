import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Main_section from "./Components/Main_section";
import Projects_Section from "./Components/Projects_Section";
import Skill_Section from "./Components/Skill_Section";

function App() {
  const [language, setLanguage] = useState(true);
  const changeLanguage = () => {
    setLanguage(!language);
  };
  return (
    <>
      <Header changeLanguage={changeLanguage} language={language} />
      <main className="lg:p-8 p-3  w-full text-white">
        <Main_section language={language} />

        <Skill_Section />

        <Projects_Section language={language} />

        <section className="h-[80vh] p-1">
          <h2 className="font-semibold text-3xl text-gray-200   rounded-2xl p-1">
            {language ? "Contáctame" : "Contact me"}
          </h2>

          <article className="p-2">
            <div className="flex w-1/2 gap-4  ">
              <img
                src="email.png"
                alt="image_imail"
                className="sm:w-14 sm:h-14 w-7 h-7 p-1 bg-white rounded-full"
              />

              <h3 className="font-semibold sm:text-xl  text-white">
                santillango10405@gmail.com
              </h3>
            </div>
          </article>
        </section>
      </main>

      <footer className="blur-background h-12 text-white flex justify-center items-center">
        <p className="text-lg font-semibold"> 2024 - Santillan's Portfolio</p>
      </footer>
    </>
  );
}

export default App;

/*
     <section class="p-4 lg:p-10 flex lg:flex-row flex-col gap-8 justify-evenly">
          <article class="flex flex-col basis-1/2  ">
            <figure class="flex flex-col text-center lg:text-left">
              <figcaption class="flex lg:flex-row lg:justify-start flex-col gap-3">
                <img
                  src="santillan.jpg"
                  alt="santillan-developer"
                  class="rounded-full w-20 h-20 lg:mr-0 lg:ml-0 mr-auto ml-auto"
                />

                <div class="s-article-div-1">
                  <h2 class="h2-1 lg:text-3xl">Hi,I am santillan,</h2>
                  <h2 class="h2-2 lg:text-4xl font-bold"> Full-Stack </h2>
                </div>
              </figcaption>

              <div class="s-article-div-2 flex flex-col justify-evenly">
                <h2 class="font-medium lg:text-xl p-2">
                  I'm passionate about the world of programming
                </h2>
                <p class="p-2">I enjoy learning to improve my abilities</p>
                <nav class="flex justify-evenly">
                  <a
                    href="santillan.pdf"
                    target="_blank"
                    class="border rounded wave-button border-gray-300 p-2 font-semibold  flex items-center justify-center"
                  >
                    <p>Currículum</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/carlos-santillan-70b4522b0"
                    target="_blank"
                    class="border rounded border-gray-300 p-2"
                  >
                    <img
                      src="linkedin.svg"
                      alt="linkedin"
                      class="w-8 h-8 rounded bg-white"
                    />
                  </a>
                  <a
                    href="https://github.com/Santillan-Go"
                    target="_blank"
                    class="border rounded border-gray-300 p-2"
                  >
                    <img
                      src="gitlight.svg"
                      alt="github"
                      class="w-8 h-8 bg-white rounded"
                    />
                  </a>
                </nav>
              </div>
            </figure>
          </article>
          <article class="s-article-2 flex flex-col justify-center gap-2 items-center  text-center lg:text-left ">
            <h2 class="lg:text-3xl font-medium">
              Now I am improving my skills
            </h2>
            <h3 class="text-xl">I am constantly learning because I enjoy it</h3>
            <h4 class="text-xl">I also prioritize my soft skills</h4>
          </article>
        </section>

        <section class="w-4/6 pl-5 pr-4 overflow-hidden mr-auto ml-auto mt-10">
          <div class="flex using-scroll justify-evenly lg:gap-28 gap-10">
            <h2 class="text-2x1 uppercase font-semibold ">JavaScript</h2>
            <h2 class="text-2x1 uppercase font-semibold  ">React</h2>
            <h2 class="text-2x1 uppercase font-semibold ">Tailwind</h2>
            <h2 class="text-2x1 uppercase font-semibold ">TypeScript</h2>
            <h2 class="text-2x1 uppercase font-semibold ">Git</h2>
            <h2 class="text-2x1 uppercase font-semibold">Github</h2>
            <h2 class="text-2x1 uppercase font-semibold">CSS</h2>
            <h2 class="text-2x1 uppercase font-semibold">Nextjs</h2>
          </div>
        </section>

        <section class="  mt-36">
          <h2 class="font-semibold text-3xl text-gray-200 p-2">
            Proyectos Personales
          </h2>

          <div class="projects-container flex flex-wrap justify-evenly mt-8 gap-5">
            <article class="w-96  border rounded-xl p-3 using-grow  ">
              <img src="movies.png" class="rounded-lg" alt="app-movies" />
              <div>
                <h2 class="text-2xl font-semibold text-center">App Movies</h2>
                <p class="text-gray-200 p-2">
                  App Movies es una app que te permite buscar peliculas y series
                  .
                </p>
              </div>
              <a
                href="https://moviemdn.netlify.app/"
                target="_blank"
                class="text-2xl"
              >
                🔗
              </a>
            </article>
            <article class="w-96  border rounded-xl p-3 using-grow">
              <img src="memoriza.png" class="rounded-lg" alt="app-memoriza" />
              <div>
                <h2 class="text-2xl font-semibold text-center">Memoriza</h2>
                <p class="text-gray-200 p-2">
                  Memoriza es una app que te permite memorizar palabras.
                </p>
              </div>
              <a
                href="https://memoriza-m.netlify.app/#/"
                target="_blank"
                class="text-2xl"
              >
                🔗
              </a>
            </article>
            <article class="w-96  border rounded-xl p-3 using-grow ">
              <img src="store.png" class="rounded-lg" alt="app-memoriza" />

              <div>
                <h2 class="text-2xl font-semibold text-center">Store</h2>
                <p class="text-gray-200 p-2">
                  Store es una app que te permite buscar y agregar al carrito
                  tus productos favoritos.
                </p>
              </div>

              <a
                href="https://store-nextjs-occcfwtev-santiillan-cs-projects.vercel.app/"
                target="_blank"
                class="text-2xl"
              >
                🔗
              </a>
            </article>
          </div>
        </section>

*/
