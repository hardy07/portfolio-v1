import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { BsFillSunFill, BsMoon } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { useThemeStore } from "../contexts/theme";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { mode, setMode } = useThemeStore();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const changeMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.style.filter = "invert(100%) hue-rotate(180deg)";
    } else {
      document.documentElement.style.filter = "invert(0) hue-rotate(0deg)";
    }
  }, [mode]);

  const menuOnclick = () => {
    document.body.style.overflow = menuOpen ? "scroll" : "hidden";
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHomeClick = () => {
    navigate("/");
    if (menuOpen) {
      menuOnclick(); // Close the menu when navigating
    }
  };

  return (
    <>
      <div className="w-full flex text-white">
        <div
          className={`fixed z-30 w-full flex items-center justify-between h-16 px-10 text-2xl bg-navbar/70 backdrop-blur-xl md:w-[80vw] md:left-[10vw] md:top-5 md:rounded-full md:border-white/10 md:border-[1px] ${
            mode === "light" && "fixed"
          }`}
        >
          <div className="w-full flex items-center justify-between md:hidden">
            <div className="cursor-pointer" onClick={menuOnclick}>
              <AiOutlineMenu />
            </div>
            <div className="cursor-pointer">
              {mode === "dark" ? (
                <BsMoon onClick={changeMode} />
              ) : (
                <BsFillSunFill onClick={changeMode} />
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-between w-full">
            <div
              className="font-mono text-sm flex gap-14 relative"
              ref={dropdownRef}
            >
              <div className="relative group">
                <div
                  className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300 flex items-center cursor-pointer"
                  onClick={handleHomeClick}
                >
                  /home
                  <AiOutlineDown className="ml-2 text-sm" />
                </div>
                <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ScrollLink
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700 cursor-pointer"
                    to="Qualifications"
                    smooth={true}
                    offset={-120}
                    duration={500}
                  >
                    /qualifications
                  </ScrollLink>
                  <ScrollLink
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700 cursor-pointer"
                    to="Technologies"
                    smooth={true}
                    offset={-170}
                    duration={500}
                  >
                    /technologies
                  </ScrollLink>
                  <ScrollLink
                    className="block px-4 py-2 text-sm text-white hover:bg-zinc-700 cursor-pointer"
                    to="AreasofInterest"
                    smooth={true}
                    offset={15}
                    duration={500}
                  >
                    /skills
                  </ScrollLink>
                </div>
              </div>
              <Link
                className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300 cursor-pointer"
                to={"/projects"}
              >
                /projects
              </Link>
              <Link
                className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300 cursor-pointer"
                to={"/certifications"}
              >
                /certifications
              </Link>
              <Link
                className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300 cursor-pointer"
                to={"/publications"}
              >
                /publications
              </Link>
              {/* Add the Blog Link */}
              <a
                href="https://hardy07.github.io/"
                className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300 cursor-pointer"
                /*target="_blank"*/
                rel="noopener noreferrer"
              >
                /blog
              </a>
              <Link
                className="hover:bg-zinc-800/50 px-3 py-2 rounded-full transition-colors duration-300 cursor-pointer"
                to={"/contact"}
              >
                /contact
              </Link>
            </div>
            <div className="cursor-pointer">
              {mode === "dark" ? (
                <BsMoon onClick={changeMode} />
              ) : (
                <BsFillSunFill onClick={changeMode} />
              )}
            </div>
          </div>
        </div>
        <div
          className={`top-16 transition-all duration-500 fixed flex flex-grow h-[calc(100vh-4rem)] w-full bg-navbar/50 z-20 left-[-100vw] backdrop-blur-lg ${
            menuOpen ? "!left-0" : ""
          }`}
        >
          <div className="font-mono flex flex-col items-center gap-10 w-full pt-12">
            <Link onClick={menuOnclick} to={"/"} className="cursor-pointer">
              {" "}
              /home{" "}
            </Link>
            <Link
              onClick={menuOnclick}
              to={"/projects"}
              className="cursor-pointer"
            >
              {" "}
              /projects{" "}
            </Link>
            <Link
              onClick={menuOnclick}
              to={"/certifications"}
              className="cursor-pointer"
            >
              {" "}
              /certifications{" "}
            </Link>
            <Link
              onClick={menuOnclick}
              to={"/publications"}
              className="cursor-pointer"
            >
              {" "}
              /publications{" "}
            </Link>
            {/* Add the Blog Link in the mobile menu */}
            <a
              onClick={menuOnclick}
              href="https://hardy07.github.io/"
              className="cursor-pointer"
              /*target="_blank"*/
              rel="noopener noreferrer"
            >
              {" "}
              /blog{" "}
            </a>
            <Link
              onClick={menuOnclick}
              to={"/contact"}
              className="cursor-pointer"
            >
              {" "}
              /contact{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
