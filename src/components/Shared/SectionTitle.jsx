function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="mb-20 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.5em] text-red-500">
        {number}
      </p>

      <h2 className="text-4xl font-black text-white md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;