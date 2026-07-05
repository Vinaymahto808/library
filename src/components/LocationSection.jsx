import LibraryCard from './LibraryCard'

export default function LocationSection() {
  return (
    <section id="location" className="space-y-8" aria-labelledby="location-heading">
      <header className="flex flex-col space-y-2">
        <h2 id="location-heading" className="text-2xl font-bold tracking-tight text-ink">
          Visit a Branch
        </h2>
        <p className="text-sm text-slate-500">Visit our flagship study center — premium amenities designed for serious aspirants.</p>
      </header>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* LEFT: Map (col-span-3) */}
        <div className="lg:col-span-3 relative group">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
            <iframe
              title="Nav Uday Library main branch location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.12775830078125002%2C51.50735092607459%2C-0.12203788757324219%2C51.5096486378058&amp;layer=mapnik&amp;marker=51.50849985854513%2C-0.1248980941772461"
              width="100%"
              height="380"
              className="block w-full"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://www.openstreetmap.org/directions?from=&to=51.5085%2C-0.1249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-sm font-medium text-ink shadow-sm border border-slate-200 hover:bg-white transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
            <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur text-sm font-medium text-ink shadow-sm border border-slate-200 hover:bg-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Switch Branch
            </button>
          </div>
          <div className="absolute bottom-3 left-3 text-[0.65rem] text-slate-400 bg-white/70 backdrop-blur px-2 py-0.5 rounded-md">
            &copy; <a href="https://openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">OpenStreetMap</a> contributors
          </div>
        </div>

        {/* RIGHT: Info (col-span-2) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Timings */}
          <div className="flex items-center gap-3 bg-emerald/5 border border-emerald/15 rounded-xl px-4 py-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald" />
            </span>
            <div>
              <span className="text-sm font-semibold text-emerald">Operational Hours</span>
              <span className="text-sm text-slate-500 ml-1.5">&mdash; Monday &ndash; Saturday: 9:00 AM &ndash; 7:00 PM</span>
            </div>
          </div>

          {/* Address */}
          <address className="not-italic space-y-1 text-sm text-slate-600">
            <p className="font-semibold text-ink">Nav Uday Library &mdash; Main Branch</p>
            <p>102 Library Way, Knowledge Plaza</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg> 100% Fully Air-Conditioned Study Halls</span>
              <span className="inline-flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> Step-Free Accessibility</span>
              <span className="inline-flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg> Dedicated Secure Bike Racks</span>
            </div>
          </address>

          {/* Transit */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Underground', value: 'Chancery Lane (0.1 mi)', color: 'bg-rose-500' },
              { label: 'Rail', value: 'City Thameslink (0.3 mi)', color: 'bg-amber-500' },
              { label: 'Bus', value: 'Routes 4, 8, 17, 25', color: 'bg-emerald' },
            ].map((t) => (
              <span key={t.label} className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5">
                <span className={`w-2 h-2 rounded-full ${t.color}`} />
                <span className="font-medium text-ink">{t.label}</span>
                {t.value}
              </span>
            ))}
          </div>

          <hr className="border-slate-100" />

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://www.openstreetmap.org/directions?from=&to=51.5085%2C-0.1249"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald text-white text-sm font-medium hover:bg-[#0D635C] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-slate-700 border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Book Showroom Tour
            </a>
          </div>
        </div>
      </div>

      {/* Branch gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <LibraryCard bannerImage="/g7.jpeg" title="Riverside Annex" subtitle="2 min walk from Main" />
        <LibraryCard bannerImage="/g8.jpeg" title="Bloomsbury Reading Room" subtitle="Historical manuscripts wing" />
        <LibraryCard bannerImage="/g10.jpeg" title="Southbank Media Hub" subtitle="Podcast & recording studios" />
        <LibraryCard
          bannerImage="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=85&fit=crop"
          title="Nav Uday Library"
          subtitle="Self-study center"
        />
      </div>
    </section>
  )
}
