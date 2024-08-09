import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 bottom-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <div className="flex gap-3 md:flex-row flex-col">
          <div onClick={() => window.open("mailto:payerasangel@gmail.com")}>
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info) => (
              <div key={info.id} onClick={() => window.open(info.link)}>
                <MagicButton
                  title={info.title}
                  icon={<img src={info.img} alt="icons" width={20} height={20} />}
                  position="right"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Rossi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
