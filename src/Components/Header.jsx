import React, { useEffect, useState } from "react";

function Header({ changeLanguage, language }) {
  const [top, setTop] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let value = window.scrollY;

      if (value > 34) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header
      className={`flex justify-center  text-xl w-full
         text-white sticky top-0  ${
           top ? "blur-background" : "bg-transparent"
         }`}
    >
      <div className="flex font-medium sm:w-1/2 justify-evenly w-full sm:justify-between">
        <h1>Santillan</h1>

        <button
          onClick={changeLanguage}
          className="language border border-gray-300 w-20 rounded-xl"
        >
          {language ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}

export default Header;
