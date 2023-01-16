import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import banksImg from "../../assets/images/illustrations/banks.png";

const illustrations = {
  bankImage: {
    image: {
      source: banksImg,
      alt: "cryptocurrency vault",
    },
  },
};

export function SecuritySection() {
  return (
    <section className="container mx-auto py-32">
      <div className="grid md:grid-cols-2">
        <img
          src={illustrations.bankImage.image.source}
          alt={illustrations.bankImage.image.alt}
        />
        <article className="flex justify-center">
          <div className="max-w-xl">
            <h2 className="font-bold text-4xl mb-6 leading-normal">
              Industry-leading security from day oneI
            </h2>
            <ul className="my-6">
              <li className="mb-6">
                <span>
                  <BsCheckCircleFill className="text-primary inline mr-2" />
                  Safety, security and compliance
                </span>
                <p className="text-gray mt-3">
                  NEFA is a licensed New York trust company that undergoes
                  regular bank exams and is subject to the cybersecurity audits
                  conducted by the New York Department of Financial Services.
                  Learn more about our commitment to security.
                </p>
              </li>
              <li className="mb-6">
                <span>
                  <BsCheckCircleFill className="text-primary inline mr-2" />
                  Hardware security keys
                </span>
                <p className="text-gray mt-3">
                  With NEFA you can secure your account with a hardware security
                  key via WebAuthn.
                </p>
              </li>
              <li className="mb-6">
                <span>
                  <BsCheckCircleFill className="text-primary inline mr-2" />
                  SOC Certifications
                </span>
                <p className="text-gray mt-3">
                  NEFA is SOC 1 Type 2 and SOC 2 Type 2 compliant. We are the
                  world’s first cryptocurrency exchange and custodian to
                  complete these exams.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
