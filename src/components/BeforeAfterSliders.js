import { BiCaretLeft } from "@react-icons/all-files/bi/BiCaretLeft";
import { BiCaretRight } from "@react-icons/all-files/bi/BiCaretRight";
import React from "react";
import ReactCompareImage from "react-compare-image";
import { Container } from "../layouts";

const BeforeAfterSliders = ({ before1, after1, before2, after2, before3, after3 }) => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-14 items-center">
          <h3 className="ml-3 font-neato italic text-4xl lg:text-5xl tracking-tight text-black w-full text-center">
            Witness an instant property transformation
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative">
            <div className="flex-1 rounded-md overflow-hidden shadow-md" data-sal="slide-right" data-sal-delay="100" data-sal-easing="ease-linear" data-sal-duration="1000">
              <ReactCompareImage
                leftImage={before1.images.fallback.src}
                rightImage={after1.images.fallback.src}
                hover={true}
              />
              <div className="absolute -top-6 left-0 font-greycliff font-bold uppercase text-sm">
                <BiCaretLeft className="inline" /> Before
              </div>
              <div className="absolute -bottom-6 right-0 font-greycliff font-bold uppercase text-sm">
                After <BiCaretRight className="inline" />
              </div>
            </div>
            <div className="flex-1 rounded-md overflow-hidden shadow-md" data-sal="slide-right" data-sal-delay="150" data-sal-easing="ease-linear" data-sal-duration="1000">
              <ReactCompareImage
                leftImage={before2.images.fallback.src}
                rightImage={after2.images.fallback.src}
                hover={true}
              />
            </div>
            <div className="flex-1 rounded-md overflow-hidden shadow-md" data-sal="slide-right" data-sal-delay="200" data-sal-easing="ease-linear" data-sal-duration="1000">
              <ReactCompareImage
                leftImageCss={{ objectPosition: "left" }}
                leftImage={before3.images.fallback.src}
                rightImage={after3.images.fallback.src}
                hover={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BeforeAfterSliders;
