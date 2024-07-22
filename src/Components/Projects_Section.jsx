import React, { useRef } from "react";

function Projects_Section({ language }) {
  const personalProjects_SPANISH = useRef([
    {
      title: "App Movies",
      description:
        "App Movies es una app que te permite buscar peliculas y series .",
      link: "https://moviemdn.netlify.app/",
      image: "movies.png",
      technologiesImages: ["react.png", "css.png"],
      git: "https://github.com/Santillan-Go/movies-mdn",
    },
    {
      title: "Memoriza",
      description: "Memoriza es una app que te permite memorizar palabras.",
      image: "memoriza.png",
      link: "https://memoriza-m.netlify.app/#/",
      technologiesImages: ["react.png", "css.png", "nodejs.png", "mongodb.png"],
      try: {
        user: "user1",
        password: "123456",
      },
      git: "https://github.com/Santillan-Go/Space-Repetition",
    },
    {
      title: "Store",
      description:
        "Store es una app que te permite buscar y agregar al carrito tus productos favoritos.",
      image: "store.png",
      link: "https://store-santillan.vercel.app",
      technologiesImages: ["react.png", "nextjs.png", "tailwind.png"],
      git: "https://github.com/Santillan-Go/store-santillan",
    },
  ]);

  const personalProjects_ENGLISH = useRef([
    {
      title: "App Movies",
      description:
        "App Movies is an app that allow you to search movies and tv series",
      image: "movies.png",
      link: "https://moviemdn.netlify.app/",
      technologiesImages: ["react.png", "css.png"],
      git: "https://github.com/Santillan-Go/movies-mdn",
    },
    {
      title: "Memoriza",
      description: "Memoriza is an app that allow you to memorize words",
      image: "memoriza.png",
      link: "https://memoriza-m.netlify.app/#/",
      technologiesImages: ["react.png", "css.png", "nodejs.png", "mongodb.png"],
      try: {
        user: "user1",
        password: "123456",
      },
      git: "https://github.com/Santillan-Go/Space-Repetition",
    },
    {
      title: "Store",
      description:
        "Store is an app that allow you to search and add to cart your favorite products",
      image: "store.png",
      link: "https://store-santillan.vercel.app",
      technologiesImages: ["react.png", "nextjs.png", "tailwind.png"],
      git: "https://github.com/Santillan-Go/store-santillan",
    },
  ]);

  return (
    <section className="mt-36">
      <div>
        <h2 className="font-semibold text-3xl text-gray-200   rounded-2xl p-1">
          {language ? "Proyectos Personales" : "Personal Projects"}
        </h2>
      </div>

      <div className="projects-container flex flex-wrap justify-evenly mt-8 mb-8 gap-5">
        {(language
          ? personalProjects_SPANISH.current
          : personalProjects_ENGLISH.current
        ).map((project) => {
          return (
            <article
              key={project.title}
              className="w-96 blur-card  rounded-xl p-3 sm:using-grow "
            >
              <img
                src={project.image}
                className="rounded-lg"
                alt={project.title}
              />
              <div>
                <h2 className="text-2xl font-semibold text-center">
                  {project.title}
                </h2>
                <p className="text-gray-200 p-2">{project.description}</p>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-2xl w-9 h-9 rounded-full hover:bg-white bg-opacity-40 flex justify-center items-center transition-colors"
                  >
                    🔗
                  </a>
                  <a
                    href={project.git}
                    className="w-9 h-9 rounded-full hover:bg-white bg-opacity-40 flex justify-center items-center transition-all cursor-pointer"
                    target="_blank"
                  >
                    <img src="code.png" alt="github" className=" w-8 h-8" />
                  </a>
                </div>

                {project.try && (
                  <div className=" flex justify-evenly flex-grow">
                    <p>username:{project.try.user}</p>
                    <p>password:{project.try.password}</p>
                  </div>
                )}
              </div>

              <div className="flex justify-center gap-4">
                {project.technologiesImages &&
                  project.technologiesImages.map((image) => (
                    <img
                      key={image}
                      src={image}
                      alt="technologies"
                      className="h-8 w-8 bg-white rounded-full "
                    />
                  ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects_Section;
