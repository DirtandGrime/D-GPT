import React from "react";
import { Container } from "../layouts";
import { StaticImage } from "gatsby-plugin-image";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { Link } from "gatsby";
import { info } from "../../data/dirtandgrime";

const Footer = () => {
  return (
    <footer className="bg-storm relative z-20 text-clean">
      <section className="pb-4 pt-16">
        <Container>
          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <StaticImage
                  src="../images/logos/logo_footer.png"
                  width={100}
                  alt="logo"
                />
                <div className="flex gap-4 text-storm">
                  {info.socials.map((profile) => (
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noreferrer"
                      key={profile.name}
                    >
                      {profile.name === "Facebook" ? (
                        <div className="flex items-center justify-center p-1.5 rounded-full shadow-sm cursor-pointer bg-clean hover:bg-opacity-80">
                          <FaFacebookF fontSize={24} />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center p-1.5 rounded-full shadow-sm cursor-pointer bg-clean hover:bg-opacity-80">
                          <AiFillInstagram fontSize={24} />
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <span className="text-3xl font-semibold">Get In Touch</span>
                <div className="flex flex-col gap-2">
                  <a href="mailto:max@dirtandgrime.co">Max@DirtAndGrime.Co</a>
                  <a href="tel:+12055782273">(205) 578-2273</a>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center lg:items-start">
                <span className="text-3xl font-semibold">Quick Links</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-x-4">
                  <Link to="/pressure-washing-in-birmingham">
                    Pressure Washing
                  </Link>
                  <Link to="/house-washing-in-birmingham">House Washing</Link>
                  <Link to="/roof-cleaning-in-birmingham">Roof Cleaning</Link>
                  <Link to="/industrial-washing-in-birmingham">
                    Industrial Washing
                  </Link>
                  <Link to="/commercial-washing-in-birmingham">
                    Commercial Washing
                  </Link>
                  <Link to="/frequently-asked-questions">FAQs</Link>
                  <Link to="/about-dirt-and-grime-co">About Us</Link>
                  <Link to="/apply">Jobs</Link>
                </div>
              </div>
            </div>
            <div className="w-full text-center">
              &copy; Dirt and Grime, Co. 2023
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
