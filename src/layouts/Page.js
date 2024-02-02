import React from "react";
import { Footer, Navbar } from "../components";

export const Head = () => (
  <>
    <meta
      property="og:title"
      content="Pressure Washing Professionals - Dirt & Grime, Co."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://www.dirtandgrime.co/" />
    <meta property="og:image" content="../images/logos/logo_navbar.jpg" />
    <meta
      property="og:description"
      content="Birmingham's best house washing, roof washing, and pressure washing services"
    />
    {/* Google Tag */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-361257420"
    ></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-361257420');
      `}
    </script>
  </>
);

const Page = ({ children, isHomepage }) => {
  return (
    <>
      <Navbar isHomepage={isHomepage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
