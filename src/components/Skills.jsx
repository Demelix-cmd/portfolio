import { motion } from "framer-motion"

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
}

const skillsData = [
  {
    title: "Développement Web",
    items: [
      "HTML / CSS / JavaScript",
      "React",
      "Tailwind CSS & Framer Motion",
      "Bootstrap",
      "Responsive Design",
      "Git & GitHub",
    ],
  },
  {
    title: "IA & Data",
    items: [
      "Python",
      "Machine Learning (bases)",
      "Classification & prédiction",
      "Analyse de données",
    ],
  },
  {
    title: "Maintenance IT",
    items: [
      "Installation Windows / Linux",
      "Drivers & périphériques",
      "Antivirus & sécurité",
      "Microsoft Office",
      "Dépannage logiciel",
    ],
  },
  {
    title: "Bases de données",
    items: [
      "SQL (MySQL, PostgreSQL)",
      "NoSQL (MongoDB)",
      "Conception de schémas",
      "Requêtes & optimisation",
    ],
  },
  {
    title: "Administration Systèmes",
    items: [
      "Linux (bash) & Windows Server",
      "Automatisation (scripts)",
      "Surveillance & sauvegarde",
      "Gestion des utilisateurs",
    ],
  },
  {
    title: "Langages & Programmation",
    items: [
      "C",
      "Pascal",
      "Java",
      "Programmation orientée objet",
    ],
  },
  {
    title: "Gestion de projets",
    items: [
      "Méthodes Agile (Scrum)",
      "Planification & suivi",
      "Jira / Trello",
      "Coordination d'équipe",
    ],
  },
  {
    title: "Réseaux & Systèmes",
    items: [
      "TCP/IP, routage & commutation",
      "Sécurité réseau",
      "DNS, DHCP",
      "Administration réseau",
    ],
  },
  {
    title: "Complexité & Optimisation",
    items: [
      "Analyse de complexité",
      "Structures de données",
      "Optimisation combinatoire",
      "Algorithmes d'approximation",
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-10"
        >
          Compétences
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          layout
          transition={spring}
          className="grid md:grid-cols-3 gap-10"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.title}
              layout
              transition={spring}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                {skill.title}
              </h3>

              <ul className="text-gray-700 space-y-2">
                {skill.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Skills
