export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="flex flex-col gap-3">
          <a className="text-muted hover:text-fg" href="https://www.linkedin.com/in/varsha-selvakumar" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-muted hover:text-fg" href="#">GitHub</a>
          <a className="text-muted hover:text-fg" href="#">Resume</a>
        </div>
        <div className="flex flex-col gap-3">
          <a className="text-muted hover:text-fg" href="mailto:varshask4757@gmail.com">Contact</a>
          <a className="text-muted hover:text-fg" href="#experience">Experience</a>
          <a className="text-muted hover:text-fg" href="#projects">Projects</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-muted">University Malaya</span>
          <span className="text-muted">B.Sc. Computer Science · AI</span>
          <span className="text-muted">CGPA 3.79 · Dean's List</span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-muted">Kuala Lumpur, Malaysia</span>
          <span className="text-muted/60 text-xs">© {new Date().getFullYear()} Varsha Selvakumar</span>
        </div>
      </div>
    </footer>
  );
}
