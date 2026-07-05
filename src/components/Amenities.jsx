export default function Amenities() {
  return (
    <section id="amenities" className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6" aria-labelledby="amenities-heading">
      <div className="flex flex-col space-y-1">
        <h2 id="amenities-heading" className="text-xl font-bold text-ink tracking-tight">
          Premium Architecture Facilities
        </h2>
        <p className="text-sm text-slate-500">
          Uncompromised environmental parameters optimized for cognitive performance.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {/* AC */}
        <div className="space-y-3">
          <span className="flex w-10 h-10 rounded-lg bg-emerald/10 items-center justify-center text-emerald">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 0l-3-3m3 3l3-3M12 22v-4m0 0l3 3m-3-3l-3 3M4.93 4.93l2.83 2.83m0 0L6.34 9.17m1.42-1.41L4.93 4.93zM19.07 4.93l-2.83 2.83m0 0l1.42 1.42m-1.42-1.42l2.83-2.83M4.93 19.07l2.83-2.83m0 0l-1.42-1.42m1.42 1.42l-2.83 2.83M19.07 19.07l-2.83-2.83m0 0l1.42-1.42m-1.42 1.42l2.83 2.83M12 8v8m-4-4h8" />
            </svg>
          </span>
          <h3 className="font-semibold text-ink text-sm">Full Air-Conditioning</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Multi-zone variable cooling keeping interiors precisely at an optimal 22&deg;C.
          </p>
        </div>

        {/* Showroom */}
        <div className="space-y-3">
          <span className="flex w-10 h-10 rounded-lg bg-emerald/10 items-center justify-center text-emerald">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </span>
          <h3 className="font-semibold text-ink text-sm">Premium Showroom Layout</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Dedicated exhibition galleries showcasing high-end industrial tech and books.
          </p>
        </div>

        {/* Smart Utilities */}
        <div className="space-y-3">
          <span className="flex w-10 h-10 rounded-lg bg-emerald/10 items-center justify-center text-emerald">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          <h3 className="font-semibold text-ink text-sm">Smart All-Inclusive Utilities</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Gigabit optical-fiber speeds, personal lockers, and localized sound dampening.
          </p>
        </div>
      </div>
    </section>
  )
}
