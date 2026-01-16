import img from "../assets/img1.jpeg"

function Hero() {
  return (
    <section className="pt-24 md:pt-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Étudiant en génie informatique
            </h1>

            <p className="mt-4 text-gray-600">
              Orienté développement web et maintenance IT, avec des projets
              concrets en web, intelligence artificielle et automatisation.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg text-center"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg text-center"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={img}
              alt="Portrait"
              className="w-full max-w-xs md:max-w-md rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
