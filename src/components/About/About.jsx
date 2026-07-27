import SectionTitle from "../Shared/SectionTitle";
import AboutCard from "./AboutCard";
import AboutStory from "./AboutStory";

function About() {
  return (
    <section
      id="about"
      className="bg-black px-8 py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          number="01"
          title="About Me"
          subtitle="Get to know who I am, what drives me, and the journey I'm taking toward becoming a software engineer."
        />

        <div className="grid gap-14 lg:grid-cols-2">
          <AboutCard />
          <AboutStory />
        </div>
      </div>
    </section>
  );
}

export default About;