import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          variants={item}
          className="text-3xl font-bold text-gray-900 mb-6"
        >
          À propos de moi
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          variants={item}
          className="text-gray-700 leading-relaxed"
        >
          Je suis étudiant en Licence 2 de génie informatique, orienté vers la
          pratique. J'aime analyser des problèmes réels et proposer des
          solutions techniques adaptées — que ce soit en développement web,
          intelligence artificielle ou maintenance informatique. Mon objectif
          est de renforcer mes compétences sur le terrain et de contribuer à
          des projets concrets.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={item}
          className="mt-6 text-gray-700 leading-relaxed"
        >
          J'ai également développé des compétences en : développement Web
          (React, HTML/CSS/JS), bases de données (SQL, NoSQL), administration
          systèmes (Linux, scripting), langages (C, Pascal, Java), réseaux &
          sécurité, ainsi qu'en analyse de complexité et optimisation
          algorithmique.
        </motion.p>

        {/* Button */}
        <motion.div variants={item} className="mt-6">
          <motion.a
            href="#skills"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Voir mes compétences
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
