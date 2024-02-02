import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { FooterCTA, GetQuoteButton, MainPitch, QuoteForm, ValuesSection } from "../components"
import { Container } from "../layouts"
import HeroVideo from "../images/MaxHeroLodge.mp4"
import Step1 from "../images/step1.svg"
import Step2 from "../images/step2.svg"
import Step3 from "../images/step3.svg"
import Page from "../layouts/Page";
import { graphql } from "gatsby";


const IndexPage = ({ data }) => {
console.log(data.allFile.nodes[0])
  
  // const beforeImage1 = getImage(data.allFile.nodes[0])
  // const afterImage1 = getImage(data.allFile.nodes[1])
  // const beforeImage2 = getImage(data.allFile.nodes[0])
  // const afterImage2 = getImage(data.allFile.nodes[1])
  // const beforeImage3 = getImage(data.allFile.nodes[0])
  // const afterImage3 = getImage(data.allFile.nodes[1])

  return (
    <Page isHomepage={true}>
      {/* This is the fixed section */}
      <section className="py-0 absolute md:top-12 w-full h-[110vh] overflow-hidden z-[10]">
          <div className="relative w-full min-h-[450px] h-full">
              <video 
                playsInline
                autoPlay
                muted
                loop
                className='w-full h-full object-cover'
              >
                <source src={HeroVideo} type='video/mp4'/>
              </video>
              <div className="absolute inset-0 bg-black/60">
                  <Container className="h-full">
                      <div className="h-full pt-15 flex flex-col gap-4 justify-center">
                          <div className="flex flex-col gap-4 justify-center items-center">
                              <div className="rounded-full w-fit bg-clean p-4" data-sal="slide-right" data-sal-duration={500}>
                                  <StaticImage 
                                      src="../images/logos/logo_hero.png" 
                                      alt="Main Logo"
                                      height={64}
                                      width={64}
                                  />
                              </div>
                              <h1 className="font-greycliff font-semibold text-3xl lg:text-4xl text-clean text-center" data-sal="slide-right" data-sal-duration={500}>
                                  House Washing, Roof Cleaning, and Pressure Washing Professionals
                              </h1>
                          </div>
                          <div className="flex items-center justify-center" data-sal="slide-right" data-sal-delay={50} data-sal-duration={500}>
                              <GetQuoteButton text="Book A Free Quote" />
                          </div>
                      </div>
                  </Container>
              </div>
          </div>
      </section>

      {/* This is the dummy div */}
      <div className="h-[100vh]"></div>

      {/* The rest of your content goes here, and will scroll as normal */}
      <div className="-mt-8 rounded-tl-[100px] z-40 relative bg-clean">

        {/* <BeforeAfterSliders
          before1={beforeImage1}
          after1={afterImage1}
          before2={beforeImage2}
          after2={afterImage2}
          before3={beforeImage3}
          after3={afterImage3}
        /> */}

        {/* This is the main pitch */}
        <MainPitch />

        <section className="bg-clean">
          <Container>
            <div className="flex flex-col gap-8 items-center">
              <span className="font-neato text-black text-4xl md:text-5xl md:!leading-[1.1]">
                Here's all it takes
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
                <div className="flex-1 flex flex-col gap-4 items-center bg-dirt/25 p-8 rounded-md shadow-lg shadow-storm/50 h-full outline outline-1 outline-black/25" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                  <div className="flex gap-3 items-center w-full">
                    <div>
                      <img src={Step1} alt="Step One" width={50} />
                    </div>
                    <span className="font-bold text-3xl italic">Book a free quote</span>
                  </div>
                  <p className="text-black/75">At our company, we understand that each and every one of our clients is different, with their own specific needs and expectations. To receive an accurate and detailed estimate for our services, all you need to do is get in touch with us and we'll take care of the rest.</p>
                </div>
                <div className="flex-1 flex flex-col gap-4 items-center bg-dirt/25 p-8 rounded-md shadow-lg shadow-storm/50 h-full outline outline-1 outline-black/25" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                  <div className="flex gap-3 items-center w-full">
                    <div>
                      <img src={Step2} alt="Step Two" width={50} />
                    </div>
                    <span className="font-bold text-3xl italic">Scheduling</span>
                  </div>
                  <p className="text-black/75">We know that finding time for home maintenance can be a challenge, which is why we offer flexible scheduling. Whether you need our services on weekdays or weekends, morning or evening, we will work with you to find a convenient time that fits your schedule.</p>
                </div>
                <div className="flex-1 flex flex-col gap-4 items-center bg-dirt/25 p-8 rounded-md shadow-lg shadow-storm/50 h-full outline outline-1 outline-black/25" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                  <div className="flex gap-3 items-center w-full">
                    <div>
                      <img src={Step3} alt="Step Three" width={50} />
                    </div>
                    <span className="font-bold text-3xl italic">Sit back & relax</span>
                  </div>
                  <p className="text-black/75">When you choose to hire us, you can sit back, relax, and let us do the work. Our team will handle everything, providing you with top-notch cleaning services that exceed your expectations. Your satisfaction is our ultimate goal.</p>
                </div>
              </div>
              {/* <div>
                <GetQuoteButton text="Get A Free Quote" />
              </div> */}
            </div>
          </Container>
        </section>

        <section className="bg-clean">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-6 lg:gap-4">
              <div className="bg-sky/10 rounded-md flex flex-col gap-6 p-8 items-center shadow-lg shadow-storm/50 outline outline-1 outline-storm col-span-4 relative z-10">
                <span className="font-neato text-4xl">Book a free quote!</span>
                <QuoteForm />
              </div>
              <div className="relative flex justify-center rounded-lg overflow-hidden mt-4 lg:mt-0 z-0 col-span-2">
                <StaticImage
                  src="../images/roof_washing.jpg"
                  alt="Get a quote!"
                  class="w-full h-full"
                />
                <div className="absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full bg-sky/80 px-4">
                  <StaticImage
                    src="../images/logos/logo_contact.png"
                    alt="Get a quote!"
                    width={400}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section>
          <Container>
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <StaticImage 
                  src="../images/sprayer.png"
                  alt="Pressure sprayer"
                  className="opacity-60"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col gap-2 lg:w-[500px]">
                  <span className="font-neato text-4xl md:text-5xl md:!leading-[1.1] ">Hear from our satisfied customers</span>
                  <span>Read real reviews from our happy customers in Birmingham</span>
                </div>
                <div className="flex flex-col gap-6 flex-1">
                  <div className="bg-dirt/25 rounded-md p-4 flex flex-col gap-2 shadow-lg shadow-storm/50 outline outline-1 outline-black/25 max-w-[565px] backdrop-blur-lg self-end" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <span className="text-2xl font-semibold">"Top-Notch Pressure Washing"</span>
                    <p className="text-black/90">Dirt and Grime, Co is the real deal! Their services are fast, efficient, and effective. I was blown away by the results and would recommend them to anyone looking for top-notch pressure washing services.</p>
                    <span className="font-semibold">- James P.</span>
                  </div>
                  <div className="bg-dirt/25 rounded-md p-4 flex flex-col gap-2 shadow-lg shadow-storm/50 outline outline-1 outline-black/25 max-w-[565px] backdrop-blur-lg" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <span className="text-2xl font-semibold">"Reliable and Professional Pressure Washing"</span>
                    <p className="text-black/90">If you're looking for reliable and professional pressure washing services, look no further than Dirt and Grime, Co. Max was a pleasure to work with and did an exceptional job on our driveway. I highly recommend them!</p>
                    <span className="font-semibold">- Amy W.</span>
                  </div>
                  <div className="bg-dirt/25 rounded-md p-4 flex flex-col gap-2 shadow-lg shadow-storm/50 outline outline-1 outline-black/25 max-w-[565px] backdrop-blur-lg self-end" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                    <span className="text-2xl font-semibold">"Highly Recommended Pressure Washing"</span>
                    <p className="text-black/90">The team from Dirt and Grime, Co. did an outstanding job on my property. Their professionalism and attention to detail were impressive, and the results speak for themselves. I would highly recommend them to anyone in need of pressure washing services.</p>
                    <span className="font-semibold">- Jeremiah W.</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pt-0">
          <Container>
            <div className="flex gap-4 flex-col">
              <div className="text-2xl italic font-medium text-center">Companies who've used our services</div>
              <div className="outline outline-1 outline-storm rounded-lg p-4 flex flex-wrap gap-12 gap-y-4 justify-evenly">
                <StaticImage 
                  src="../images/clientLogos/amazon_logo.png"
                  alt="Amazon"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/brookwood_logo.png"
                  alt="Brookwood Baptist Health"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/fairfield_logo.png"
                  alt="Fairfield by Marriot"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/marriott_logo.png"
                  alt="Marriott"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/hilton_logo.png"
                  alt="Hilton"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/hampton_logo.png"
                  alt="Hampton by Hilton"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/embassy_logo.png"
                  alt="Embassy Suites"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/drury_logo.png"
                  alt="Drury Hotels"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/amstar_logo.png"
                  alt="AmStar Cinemas"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/express_logo.png"
                  alt="Express Oil Change"
                  objectFit="contain"
                />
                <StaticImage 
                  src="../images/clientLogos/shell_logo.png"
                  alt="Shell"
                  objectFit="contain"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="relative" style={{clipPath: "inset(0)"}}>
          {/* <div className="absolute w-full h-full top-0 left-0 bg-no-repeat bg-cover bg-[url('../images/driveway_stock.jpeg')] -z-10 bg-fixed">
            <div className="w-full h-full bg-storm/75 backdrop-brightness-75"></div>
          </div> */}
          <div className="absolute w-full h-full top-0 left-0 -z-10 overflow-hidden">
            <div className="fixed top-0 left-0 w-full h-full lg:h-auto">
              <StaticImage
                src="../images/driveway_stock.jpeg"
                alt="Pressure washing background"
                layout="fullWidth"
                className="h-full lg:h-auto"
              />
            </div>
          </div>

          <div className="absolute w-full h-full top-0 left-0 -z-10 overflow-hidden bg-storm/75 backdrop-brightness-75"></div>

          <Container>
            <div className="flex flex-col gap-4 text-center text-clean">
              <div className="font-semibold text-5xl -mb-2">We guarantee 100% satisfaction!</div>
              <p>Try our pressure washing services in Birmingham with complete peace of mind</p>
              <div data-sal="zoom-in" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="500">
                <GetQuoteButton text="Get A Free Quote" outline={true} />
              </div>
            </div>
          </Container>
        </section>

        <ValuesSection />

        <FooterCTA />

      </div>
    </Page>
  )
}

export const query = graphql`
  query($in: [String] = ["before_dog.jpg", "after_dog.jpg"]) {
    allFile(sort: {relativePath: DESC}, filter: {relativePath: {in: $in}}) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
        relativePath
      }
    }
  }
`

export default IndexPage

export const Head = () => (
  <>
    <title>Professional Pressure Washing Services | Dirt and Grime, Co.</title>
    <meta name="description" content="Dirt and Grime, Co. offers exceptional pressure washing and exterior cleaning services. We help residential and commercial properties sparkle with our advanced equipment and expert techniques." />
  </>
)
