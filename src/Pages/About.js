import React from "react";
import Work from "../Components/Work";
import { personalDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          À propos
        </h1>
        <p className="text-content py-8 lg:max-w-3xl">{personalDetails.about}</p>
        {/* Lien vers le CV */}
        <a 
          href="/cv.pdf"  
          target="_blank" 
          rel="noopener noreferrer"
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-[#a855f7] hover:from-purple-400 hover:to-[#a855f7] font-bold"
        >
          Télécharger mon CV
        </a>
      </section>
      {/* <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Expérience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section> */}
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Formation
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
