import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section id="about">
      <div className="text-gray-400 bg-dark px-10 py-20 body-font">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40"></div>
        <motion.div whileHover={{ scale: 1.02 }}>
          <div className="mx-auto">
            <div className="mb-20 text-center">
              <div className="bg-lilbitdark">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <HeartIcon className="text-gray-400 mx-auto inline-block w-10 mb-4" />
                    <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                      Heya, I'm Flyaway.
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-400">
                      I'm from Australia and I enjoy doing web dev. I like learning new things. I own a Proxy site named InterGalactic and Shadow, it's purpose is providing games and apps and that bypass school firewalls and restrictions
                    </p>

                    {/* <div className="mt-5 flex justify-center">
                      <div className="bg-dark flex flex-col md:flex-row md:max-w-xl rounded-lg  shadow-lg">
                        {largeImage && (
                          <img
                            width="120px"
                            draggable={false}
                            src={largeImage}
                            alt=""
                          />
                        )}
                        {smallImage && (
                          <img
                            width="120px"
                            draggable={false}
                            src={smallImage}
                            alt=""
                          />
                        )}
                      </div>
                      <div className="bg-dark p-6 flex flex-col justify-start">
                        <h4 className="main-accent">{name}</h4>
                        {firstLine && <h5>{firstLine}</h5>}
                        {secondLine && <h5>{secondLine}</h5>}
                        {elapsed}
                      </div>
                    </div> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
