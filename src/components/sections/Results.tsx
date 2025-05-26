export default function Results() {
  const results = [
    { value: "350%", description: "increase in email system performance" },
    { value: "50%", description: "faster backend query times" },
    {
      value: "39+",
      description: "physical store locations scaled with loyalty",
    },
    { value: "↓ 26%", description: "incident ticket rate from 34% to 26%" },
    {
      value: "3 Countries",
      description: "successful app launches (US, MX, CR)",
    },
  ];

  return (
    <section className="w-full px-6 py-24 max-w-5xl mx-auto text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Results That Matter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-lemon-green rounded-lg hover:bg-lemon-green hover:text-deep-blue transition"
          >
            <p className="text-2xl font-bold mb-2">{item.value}</p>
            <p className="text-light-blue">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
