import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

function Navbar() {
  const [open, setOpen] = useState(false)

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
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-600">
          Saïd Deme
        </h1>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.link} className="hover:text-blue-600">
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md"
          >
            <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
