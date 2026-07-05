const facilities = [
  { label: 'Air-Conditioned Halls', icon: 'M9 6l3 3m0 0l3-3m-3 3V3M6 9h12M6 9a3 3 0 01-3-3m3 3v6m0 0a3 3 0 01-3 3m3-3h12m0 0a3 3 0 013 3m-3-3V9m0 0a3 3 0 013-3' },
  { label: 'Individual Study Cabins', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
  { label: 'High-Speed Wi-Fi', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9 9 0 0114.14 0' },
  { label: 'CCTV + AI Surveillance', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', highlight: true },
  { label: 'Dedicated Parking', icon: 'M5 13l4 4L19 7' },
  { label: 'Power Backup', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
]

export default function NavUdaySection() {
  return (
    <section className="border-t border-slate-200 bg-white" aria-labelledby="navuday-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header with branding */}
        <div className="text-center mb-12">
          <span className="card-tag text-xs">Premium Facility</span>
          <h2 id="navuday-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 text-ink">
            Nav Uday Library
          </h2>
          <p className="text-emerald font-semibold text-base sm:text-lg mt-1">
            &ldquo;Rise with Knowledge&rdquo;
          </p>
          <p className="text-slate-400 text-sm mt-1 max-w-lg mx-auto">
            A premium library for serious aspirants &mdash; Focus, Learn &amp; Succeed
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left: Promotional Image */}
          <div className="lg:col-span-3">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=85&fit=crop"
                alt="Nav Uday Library — Premium self-study center"
                loading="lazy"
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Timing */}
            <div className="flex items-center gap-3 bg-royal/5 border border-royal/15 rounded-xl px-4 py-3">
              <svg className="w-5 h-5 text-royal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <span className="text-sm font-semibold text-royal">Open Daily</span>
                <span className="text-sm text-slate-500 ml-1.5">&mdash; 6:00 AM &ndash; 10:00 PM</span>
              </div>
            </div>

            {/* Management */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">Management</p>
              <p className="text-sm font-semibold text-ink">Proprietor: Guddu Kumar</p>
              <a
                href="tel:+919999988888"
                className="inline-flex items-center gap-1.5 text-sm text-emerald hover:text-ink transition-colors mt-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 99999 88888
              </a>
            </div>

            {/* Facilities grid */}
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-2.5">Amenities</p>
              <div className="grid grid-cols-2 gap-2">
                {facilities.map((f) => (
                  <div
                    key={f.label}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-all ${
                      f.highlight
                        ? 'bg-emerald/5 border-emerald/20 text-emerald'
                        : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    <svg className={`w-3.5 h-3.5 shrink-0 ${f.highlight ? 'text-emerald' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                    {f.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ----- 3D VIDEO TOUR ----- */}
        <div className="mt-12 rounded-xl border border-slate-200 bg-black overflow-hidden shadow-sm">
          <div className="relative">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full aspect-video block bg-black"
              poster="/g9.jpeg"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur px-3 py-1.5 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
              </span>
              <span className="text-[0.7rem] text-white/80 font-medium tracking-wide">3D WALKTHROUGH</span>
            </div>
            <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur px-3 py-1.5 rounded-lg">
              <p className="text-[0.65rem] text-white/70">Nav Uday Library &bull; Ground floor tour</p>
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?kgmid=/g/11tfx2yqgv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white text-sm font-semibold hover:bg-emerald transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            Register for Membership &mdash; Enquire Now
          </a>
          <p className="text-xs text-slate-400 mt-2">Limited seats available &bull; Contact for admission &amp; pricing</p>
        </div>
      </div>
    </section>
  )
}
