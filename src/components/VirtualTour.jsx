export default function VirtualTour() {
  return (
    <section className="border-t border-slate-200 bg-slate-50" aria-labelledby="tour-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-14 items-center">

          {/* Left: text */}
          <div className="lg:col-span-2 space-y-5">
            <span className="card-tag">Walk through</span>
            <h2 id="tour-heading" className="text-2xl sm:text-3xl font-bold tracking-tight">
              Virtual Tour
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              Can&rsquo;t visit in person? Step inside every reading room, studio,
              and archive from your screen. Our 4K guided tour covers all 12
              branches with immersive spatial audio.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', label: 'Self-guided' },
                { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', label: 'Narrated tours' },
              ].map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                  {f.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: video player */}
          <div className="lg:col-span-3">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-black shadow-sm group">
              <video
                controls
                playsInline
                preload="metadata"
                className="w-full aspect-video block bg-black"
                poster="/g10.jpeg"
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-white/40 bg-black/30 px-3 py-1 rounded-full backdrop-blur">
                  {navigator?.onLine ? 'HD available' : 'Offline playback'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
