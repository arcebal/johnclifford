import Ferrofluid from "../../effects/Ferrofluid";

function HeroBackground() {
  return (
    <>
      {/* Ferrofluid Layer */}
      <div className="absolute inset-0">
        <Ferrofluid
          colors={["#7f1d1d", "#dc2626", "#ef4444"]}
          speed={0.25}
          scale={1.6}
          turbulence={1}
          fluidity={0.1}
          rimWidth={0.2}
          sharpness={2.5}
          shimmer={1.2}
          glow={1.3}
          flowDirection="down"
          opacity={0.85}
          mouseInteraction
          mouseStrength={0.4}
          mouseRadius={0.25}
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
    </>
  );
}

export default HeroBackground;