import React from "react";
import Page from "../layouts/Page";
import { QuoteForm, TitleBanner } from "../components";
import { Container } from "../layouts";
import { StaticImage } from "gatsby-plugin-image";

const GetAQuote = () => {
  return (
    <Page>
      <TitleBanner title="Get A Free Quote" />

      <section>
        <Container>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="flex flex-col gap-8 items-center">
              <StaticImage
                src="../images/logos/logo_navbar.png"
                alt="Company Logo"
                width={300}
              />
              <a href="tel:+12055782273">
                <button
                  className="leading-none font-greycliff font-semibold px-5 pb-2.5 pt-3 bg-mud text-xl text-clean rounded-full shadow-md shadow-black/60 hover:shadow-sky hover:-translate-y-0.5"
                  type="link"
                >
                  Give us a call
                </button>
              </a>
              <a href="mailto:max@dirtandgrime.co">
                <button
                  className="leading-none font-greycliff font-semibold px-5 pb-2.5 pt-3 bg-clean text-black text-xl border-4 border-mud rounded-full shadow-md shadow-black/60 hover:shadow-sky hover:-translate-y-0.5"
                  type="link"
                >
                  Send an email
                </button>
              </a>
            </div>
            <div className="p-6 rounded-md border border-dirt/75 relative m-auto max-w-screen-xl">
              <div className="col-span-2 font-neato text-3xl italic bg-clean static md:absolute -top-5 left-0 p-4 ml-2.5 md:py-0">
                How can we help you today?
              </div>
              <div className="md:mt-4">
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Page>
  );
};

export const Head = () => (
  <>
    <title>Get A Free Quote</title>
    <meta
      name="description"
      content="Get a fast and free quote so you know exactly how much we'll charge, before you agree to pay."
    />
  </>
);

export default GetAQuote;
