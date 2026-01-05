import { useState } from "react";

function Projects() {
    const [choixIA, setChoixIA] = useState("");
    const getIALink = () => {
        if (choixIA === "1") {
        return "https://github.com/Demelix-cmd/classification-messages";
        }
        if (choixIA === "2") {
        return "https://github.com/Demelix-cmd/Note-prediction-using-ML";
        }
        return null;
    };

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Projets
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Projet 1 */}
          <div className="bg-gray-50 p-6 rounded-xl bg-rd shadow">
            <h3 className="text-xl font-semibold mb-3">
              Système de vente en ligne
            </h3>
            <p className="text-gray-700 mb-4">
              Site e-commerce développé pour un commerce local afin de faciliter
              la gestion des produits et la prise de commandes en ligne.
            </p>
            <p className="text-sm text-gray-500 mb-4">
               Stack : Full PHP
            </p>
            <a
              href="https://github.com/Demelix-cmd/site-e-commerce"
              className="text-blue-600 font-medium"
            >
              Voir sur GitHub →
            </a>
          </div>

        {/* Projet 2 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-3">
            Classification & prédiction (IA)
        </h3>

        <p className="text-gray-700 mb-4">
            Projets de machine learning pour la classification de messages et
            la prédiction de notes académiques.
        </p>

        <p className="text-sm text-gray-500 mb-4">
            Python, Machine Learning
        </p>

        <input
            type="text"
            placeholder="Tape 1 : Classification ou 2 for other"
            value={choixIA}
            onChange={(e) => setChoixIA(e.target.value)}
            className="border p-2 rounded mb-4 w-full"
        />

        {getIALink() && (
            <a
            href={getIALink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium"
            >
            Voir sur GitHub →
            </a>
        )}
        </div>

         
          {/* Projet 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Chatbot Telegram
            </h3>
            <p className="text-gray-700 mb-4">
              Chatbot intelligent basé sur l’API Gemini, permettant des
              interactions automatiques avec les utilisateurs.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Python / JavaScript, API, Telegram
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium"
            >
              Voir sur GitHub →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects
