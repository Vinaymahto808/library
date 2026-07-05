export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Links + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; 2026 Nav Uday Library — The Archive. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer links">
            <a href="#" className="hover:text-ink transition-colors">Home</a>
            <a href="#services" className="hover:text-ink transition-colors">Services</a>
            <a href="#books" className="hover:text-ink transition-colors">Featured Books</a>
            <a href="#" className="hover:text-ink transition-colors">Archive</a>
            <a href="#location" className="hover:text-ink transition-colors">Location</a>
            <a href="#contact" className="hover:text-ink transition-colors">Contact / Support</a>
            <a href="#" className="hover:text-ink transition-colors">Member Login</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
