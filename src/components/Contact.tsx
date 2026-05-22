import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mt-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center py-16">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase">
          Ready to connect?
        </h2>
        <p className="mt-5 text-lg md:text-xl text-muted">
          Varsha is open to AI Engineering, Tech Consulting, and Product Management internships.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:varshask4757@gmail.com"
            className="bg-white text-black px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white/85 transition"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/varsha-selvakumar"
            target="_blank"
            rel="noreferrer"
            className="bg-white/15 backdrop-blur text-white px-7 py-3 rounded font-semibold flex items-center gap-2 hover:bg-white/25 transition"
          >
            <Linkedin className="w-5 h-5" />
            Connect on LinkedIn
          </a>
        </div>
        <p className="mt-6 text-sm text-muted">+60 11-6423 5524</p>
      </div>
    </section>
  );
}
