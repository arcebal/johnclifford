import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-black">
        <Hero />
        <About />
        <TechStack />
      </main>
    </>
  );
}

export default App;