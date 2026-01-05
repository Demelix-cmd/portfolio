import { motion } from "framer-motion"

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-12"
        >
          Intéressé par mon profil ou un projet ?  
          N’hésite pas à me contacter 👇
        </motion.p>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* EMAIL */}
          <motion.a
            href="mailto:demetech17@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
          >
            <p className="text-2xl mb-2">📧</p>
            <p className="font-medium">Email</p>
            <p className="text-gray-600 text-sm mt-1">
              demetech17@gmail.com
            </p>
          </motion.a>

          {/* WHATSAPP */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <a href="https://wa.me/221775538001?text=Salut%20Saïd%2C%20je%20viens%20de%20voir%20ton%20portfolio" target="_blank">
            <p className="text-2xl mb-2">📱</p>
            <p className="font-medium">WhatsApp</p>
            <p className="text-gray-600 text-sm mt-1">
             a +221 77 553 80 01
            </p>
            </a>
          </motion.div>

          {/* GITHUB */}
          <motion.a
            href="https://github.com/Demelix-cmd"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition block"
          >
            <p className="text-2xl mb-2">💻</p>
            <p className="font-medium">GitHub</p>
            <p className="text-blue-600 text-sm mt-1">
              github.com/Demelix-cmd
            </p>
          </motion.a>

        </div>

      </div>
    </section>
  )
}

export default Contact
