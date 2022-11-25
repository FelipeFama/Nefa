import React from "react";
import signupImage from "../../images/illustrations/signup.png";
import walletImage from "../../images/illustrations/wallet.png";
import okayImage from "../../images/illustrations/okay.png";
import arrow from "../../images/arrow.svg";

export default function StepSection() {
  return (
    <section className="px-6">
      <div className="rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20">
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Get started in just a few minutes
          </h2>
          <div className="md:flex justify-center gap-24">
            <div className="text-center relative px-4 mx-2">
              <div className="relative mx-2">
                <img src={signupImage} className="mb-4 mx-auto" alt="" />
                <img
                  src={arrow}
                  alt=""
                  className="hidden md:block absolute top-1/2 -right-40"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
              <p className="text-gray max-w-sm">
                Buy Bitcoin or Ethereum, then securely store it in your Wallet
                or send it on easily to friends
              </p>
            </div>
            <div className="text-center relative px-4 mx-2">
              <div className="relative mx-2">
                <img src={walletImage} className="mb-4 mx-auto" alt="" />
                <img
                  src={arrow}
                  alt=""
                  className="hidden md:block absolute top-1/2 -right-40"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fund</h3>
              <p className="text-gray max-w-sm">
                Choose your preferred payment method such as bank transfer or
                credit card to top up your NEFA Wallet
              </p>
            </div>
            <div className="text-center relative px-4 mx-2">
              <img src={okayImage} className="mb-4 mx-auto" alt="" />
              <h3 className="text-2xl font-bold mb-4">Buy Crypto</h3>
              <p className="text-gray max-w-sm">
                Sign up for your free NEFA Wallet on web, iOS or Android and
                follow our easy process to set up your profile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
