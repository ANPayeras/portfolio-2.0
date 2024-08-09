"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <CardContainer>
              <CardBody className="rounded-2xl cursor-pointer shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 h-full p-4 box-content flex flex-col gap-4">
                <CardItem
                  as='h1'
                  translateZ="50"
                  className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD]"
                >
                  {item.des}
                </CardItem>
                <CardItem
                  translateZ={50}
                  rotateX={10}
                  rotateZ={-10}
                  className="relative flex items-center justify-center w-full h-[20vh] lg:h-[30vh] overflow-hidden"
                >
                  <div
                    className="relative w-full h-full overflow-hidden rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute h-[80%]"
                  />
                </CardItem>

                <CardItem
                  translateZ={20}
                  translateX={-10}
                  className="flex items-center justify-between mt-7 mb-3 w-full"
                >
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center hover:opacity-50" onClick={() => window.open(item.link)}>
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </CardItem>
                {/* <CardItem
                  translateZ={20}
                  translateX={-10}
                  as="button"
                  className="flex items-center"
                >
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </CardItem>
                <CardItem
                  as="button"
                  className="flex justify-center items-center hover:opacity-50"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </a>
                </CardItem> */}
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>

    </div >
  );
};

export default RecentProjects;
