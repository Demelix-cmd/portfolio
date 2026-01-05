import { motion } from "framer-motion"

function Navbar() {
  const navItems = [
    { name: "À propos", link: "#about" },
    { name: "Compétences", link: "#skills" },
    { name: "Projets", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-blue-600 cursor-pointer"
        >
          Saïd Deme
        </motion.h1>

        {/* LINKS */}
        <ul className="flex gap-8 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <motion.a
                href={item.link}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                {item.name}
                {/* underline animé */}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600 origin-left scale-x-0 hover:scale-x-100 transition-transform"
                />
              </motion.a>
            </motion.li>
          ))}
        </ul>

      </div>
    </motion.nav>
  )
}

export default Navbar
