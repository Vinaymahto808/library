import { useEffect, useRef } from 'react'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <section className="relative w-full min-h-[600px] sm:min-h-[700px] lg:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster="/g1.jpeg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center py-24 sm:py-20 lg:py-0">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-emerald-500/20 text-emerald-400 backdrop-blur-md border border-emerald-500/30 mb-4 sm:mb-6 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Nav Uday Library
        </span>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-3 sm:mb-4 animate-slide-up">
          No <span className="text-emerald-400">Distractions</span><br />
          Focus on your <span className="text-emerald-400">Goals</span>
        </h1>

        {/* Subheading */}
        <p className="text-sm sm:text-lg lg:text-xl text-white/60 max-w-lg lg:max-w-xl leading-relaxed mb-6 sm:mb-8 animate-slide-up px-2" style={{ animationDelay: '0.1s' }}>
          Stop worrying about loud environments at home. Get your own personal study cabin with high-speed Wi-Fi, air conditioning, and complete test prep resources.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <a
            href="#contact"
            className="group px-5 sm:px-7 py-3 sm:py-3.5 bg-emerald-500 text-white font-semibold rounded-xl text-sm hover:bg-emerald-600 shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Book Your Seat Today
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-5 sm:px-7 py-3 sm:py-3.5 bg-white/10 text-white border border-white/20 font-medium rounded-xl text-sm hover:bg-white/20 backdrop-blur-md transition-all duration-300"
          >
            Check Monthly Fees
          </a>
        </div>

        {/* Feature Cards */}
        <div className="hidden sm:grid grid-cols-3 gap-3 lg:gap-4 w-full max-w-3xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {[
            {
              icon: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15',
              title: 'Personal Study Cabins',
              desc: 'Silent, comfortable desks with charging points and privacy.',
            },
            {
              icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
              title: 'Complete Study Resources',
              desc: 'High-yield books, formula charts, and online test practice sets.',
            },
            {
              icon: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.996.128-1.906.58-2.73 1.262m5.48 8.016c-.39-.072-.786-.11-1.19-.118m-1.2 0a5.965 5.965 0 01-1.2-.118m2.396 1.17c.138-.417.298-.824.478-1.222m-3.956 0c.18.398.34.805.478 1.222m-3.956-1.17c-.39-.072-.786-.11-1.19-.118m1.2 0a5.965 5.965 0 01-1.2-.118',
              title: 'Proven Local Results',
              desc: 'Part of a growing community of top performers aiming for dream careers.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-4 lg:p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </div>
              <h3 className="text-xs lg:text-sm font-semibold text-white">{f.title}</h3>
              <p className="text-[10px] lg:text-xs text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Feature Highlights (compact horizontal scroll) */}
        <div className="flex sm:hidden gap-3 w-full overflow-x-auto pb-2 snap-x snap-mandatory -mx-5 px-5" style={{ animationDelay: '0.3s' }}>
          {[
            { icon: 'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15', text: 'Personal Study Cabins' },
            { icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25', text: 'Complete Study Resources' },
            { icon: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.996.128-1.906.58-2.73 1.262m5.48 8.016c-.39-.072-.786-.11-1.19-.118m-1.2 0a5.965 5.965 0 01-1.2-.118m2.396 1.17c.138-.417.298-.824.478-1.222m-3.956 0c.18.398.34.805.478 1.222m-3.956-1.17c-.39-.072-.786-.11-1.19-.118m1.2 0a5.965 5.965 0 01-1.2-.118', text: 'Proven Local Results' },
          ].map((f, i) => (
            <div key={i} className="flex items-center gap-2.5 min-w-[200px] snap-start px-3 py-2.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </div>
              <span className="text-[11px] font-medium text-white/70 leading-snug">{f.text}</span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-white/40 font-medium">Scroll to explore</span>
          <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
