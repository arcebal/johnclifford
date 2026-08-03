import SectionTitle from "../Shared/SectionTitle";
import TechCategory from "./TechCategory";

import techStack from "../../data/techStack";

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="bg-black px-8 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          number="02"
          title="Technology Stack"
          subtitle="The technologies I use to design, build, and deliver modern web applications."
        />

        <div className="space-y-10">
          {techStack.map((category) => (
            <TechCategory
              key={category.title}
              category={category}
            />
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center leading-8 text-gray-400">
          I continuously explore new technologies, frameworks, and tools to
          improve my development workflow and build modern, scalable, and
          user-friendly applications.
        </p>
      </div>
    </section>
  );
}

export default TechStack;