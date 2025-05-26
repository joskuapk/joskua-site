"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-6 py-24 max-w-3xl mx-auto text-left"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Let’s Work Together
      </h2>
      <p className="text-light-blue mb-10">
        Have a project in mind? Let’s talk.
      </p>
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted (demo)");
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="px-4 py-3 rounded border border-lemon-green bg-transparent placeholder-light-blue text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="px-4 py-3 rounded border border-lemon-green bg-transparent placeholder-light-blue text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="px-4 py-3 rounded border border-lemon-green bg-transparent placeholder-light-blue text-white"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-lemon-green text-deep-blue rounded font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
