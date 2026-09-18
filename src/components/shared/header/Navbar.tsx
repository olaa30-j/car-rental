import { NavLink } from 'react-router-dom';

const NavBarLinks = [
  { text: 'Home', link: '/' },
  { text: 'Vehicles', link: '/products' },
  { text: 'Details', link: '/details/1' },
  { text: 'About Us', link: '/about' },
  { text: 'Contact Us', link: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-col lg:flex-row items-center h-screen text-center lg:h-fit lg:text-start gap-4 lg:gap-8">
        {NavBarLinks.map((item) => (
          <li key={item.link} className="w-full lg:w-auto">
            <NavLink
              to={item.link}
              end={item.link === '/'}
              className={({ isActive }) =>
                `block text-[18px] font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-gray-800 hover:text-primary hover:font-bold'
                }`
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;