/* eslint-disable react/no-unescaped-entities */
import partnerOne from "../../assets/images/partners/partner1.png";
import partnerTwo from "../../assets/images/partners/partner2.png";
import partnerThree from "../../assets/images/partners/partner3.png";
import partnerFour from "../../assets/images/partners/partner4.png";
import { Fade } from "react-awesome-reveal";

const partners = {
  partnerOne: {
    image: partnerOne,
    alt: "partner one",
  },
  partnerTwo: {
    image: partnerTwo,
    alt: "partner two",
  },
  partnerThree: {
    image: partnerThree,
    alt: "partner three",
  },
  partnerFour: {
    image: partnerFour,
    alt: "partner four",
  },
};

export function PartnerSection() {
  return (
    <section className="px-6">
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto">
          <article className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-4">
              Trusted Partners Worldwide
            </h2>
            <p className="text-gray">
              We're partners with countless major organisations around the globe
            </p>
          </article>
          <div className="mx-4">
            <figure className="grid lg:grid-cols-4 grid-cols-1 justify-items-center gap-6">
              <Fade direction={"up"}>
                <img
                  src={partners.partnerOne.image}
                  alt={partners.partnerOne.alt}
                  className="basis-1/2"
                />
              </Fade>
              <Fade direction={"up"} delay={200}>
                <img
                  src={partners.partnerTwo.image}
                  alt={partners.partnerTwo.alt}
                  className="basis-1/2"
                />
              </Fade>
              <Fade direction={"up"} delay={400}>
                <img
                  src={partners.partnerThree.image}
                  alt={partners.partnerThree.alt}
                  className="basis-1/2"
                />
              </Fade>
              <Fade direction={"up"} delay={600}>
                <img
                  src={partners.partnerFour.image}
                  alt={partners.partnerFour.alt}
                  className="basis-1/2"
                />
              </Fade>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
