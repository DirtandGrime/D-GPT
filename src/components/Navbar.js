import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { IoIosCall } from "@react-icons/all-files/io/IoIosCall";
import { IoIosMail } from "@react-icons/all-files/io/IoIosMail";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

import { info } from "../../data/dirtandgrime";
import { NavbarMenu, GetQuoteButton } from "../components";
import { Container } from "../layouts";

const Navbar = ({ isHomepage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleBtn = React.useRef(null);
  const dropdownMenu = React.useRef(null);

  const handleClickOutside = (e) => {
    console.log(dropdownMenu.current);
    if (dropdownMenu.current && !dropdownMenu.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (isMenuOpen) {
      toggleBtn.current.focus();
    }
  }, [isMenuOpen]);

  const [offset, setOffset] = React.useState(0);
  const initialStyle = isHomepage
    ? "bg-transparent text-clean"
    : "bg-clean text-black";
  const [styles, setStyles] = React.useState(initialStyle);
  const [isNavScrolled, setIsNavScrolled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined" && isHomepage) {
      window.onscroll = () => {
        setOffset(window.pageYOffset);
      };
    }
  }, [isHomepage]);

  React.useEffect(() => {
    if (offset > 100 && isHomepage) {
      setStyles("bg-clean text-black border-b border-cement");
      setIsNavScrolled(true);
    } else if (isHomepage) {
      setStyles("bg-transparent text-clean");
      setIsNavScrolled(false);
    }
  }, [offset, isHomepage]);

  return (
    <nav className={`${isHomepage ? "fixed" : "sticky"} top-0 w-full z-50`}>
      <Container className="bg-storm py-2 hidden md:block">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-mud">
            {info.socials.map((profile) => (
              <a
                href={profile.url}
                target="_blank"
                rel="noreferrer"
                key={profile.name}
              >
                {profile.name === "Facebook" ? (
                  <div className="flex items-center justify-center p-1.5 rounded-full shadow-sm cursor-pointer bg-clean hover:bg-opacity-80">
                    <FaFacebookF fontSize={20} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center p-1.5 rounded-full shadow-sm cursor-pointer bg-clean hover:bg-opacity-80">
                    <AiFillInstagram fontSize={20} />
                  </div>
                )}
              </a>
            ))}
          </div>
          <div className="flex gap-8 text-clean font-greycliff font-medium">
            <div className="flex gap-1 items-center hover:text-cement">
              <IoIosCall className="pb-1" fontSize={24} />
              <a href={`tel:${info.phone_tel}`}>Call: {info.phone}</a>
            </div>
            <div className="flex gap-1 items-center">
              <IoIosMail className="pb-1" fontSize={24} />
              <a href={`mailto:${info.email}`}>Email: {info.email}</a>
            </div>
          </div>
        </div>
      </Container>
      <Container className={`${styles} py-4 duration-500`}>
        <div
          className="flex justify-between items-center"
          data-sal="slide-down"
          data-sal-delay="0"
          data-sal-easing="ease-linear"
          data-sal-duration="500"
        >
          <Link to="/">
            {isHomepage ? (
              <>
                {isNavScrolled ? (
                  <StaticImage
                    src="../images/logos/logo_navbar.png"
                    alt="Main Logo"
                    height={75}
                    loading="eager"
                    placeholder="blurred"
                  />
                ) : (
                  <StaticImage
                    src="../images/logos/logo_navbar_white.png"
                    alt="Main Logo"
                    height={75}
                    loading="eager"
                    placeholder="blurred"
                  />
                )}
              </>
            ) : (
              <StaticImage
                src="../images/logos/logo_navbar.png"
                alt="Main Logo"
                height={75}
                loading="eager"
                placeholder="blurred"
              />
            )}
          </Link>
          <NavbarMenu className="hidden lg:flex" />
          <div className="hidden lg:inline">
            <Link to="/get-a-quote">
              <button className="leading-none font-greycliff font-semibold px-5 pb-2.5 pt-3 bg-mud text-xl text-clean rounded-full shadow-md shadow-black/60 hover:shadow-sky hover:-translate-y-0.5 relative z-20">
                Get a Quote
              </button>
            </Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={toggleBtn}
            className="lg:hidden cursor-pointer"
          >
            <GiHamburgerMenu fontSize={28} className="hover:brightness-90" />
          </button>
        </div>
        <div ref={dropdownMenu} aria-haspopup="true" aria-expanded={isMenuOpen}>
          <NavbarMenu
            className={`mt-3 flex-col gap-4 lg:hidden ${
              isMenuOpen ? "block" : "hidden"
            }`}
          />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
