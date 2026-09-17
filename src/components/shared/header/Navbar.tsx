const NavBarLinks = [
  {
    text: "Home",
    link: "/"
  },
  {
    text: "Vehicles",
    link: "/products"
  },
  {
    text: "Details",
    link: "/details/1"
  },
  {
    text: "About Us",
    link: "/about"
  },
  {
    text: "Contact Us",
    link: "/contact"
  }
]

const Navbar = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-col lg:flex-row items-center h-screen text-center lg:h-fit lg:text-start gap-4 lg:gap-8">
        {NavBarLinks.map((item, index) => (
          <li key={index} className="w-full lg:w-auto">
            <a
              href={item.link}
              className="block text-[18px] font-semibold text-gray-800 hover:text-primary hover:font-bold transition-all duration-200"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar