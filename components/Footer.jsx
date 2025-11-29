export default function Footer() {
  return (
    <footer className="footer py-3 mt-4 border-top border-secondary">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <span className="text-muted">StarWrath: RTS in the cold void.</span>
        <div className="d-flex gap-3">
          <a href="#support" className="text-muted">
            Support
          </a>
          <a href="#privacy" className="text-muted">
            Privacy
          </a>
          <a href="#terms" className="text-muted">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
