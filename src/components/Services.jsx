import { Stagger, FadeUp } from './Reveal'

const SERVICES = [
  {
    title: 'Quiet Study Rooms',
    desc: 'Unlock completely silent, focus-optimized individual cabins designed for deep reading, long study marathons, and full-length exam simulations.',
    img: '/g1.jpeg',
    icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    title: 'Physical & Digital Book Bank',
    desc: 'Skip the expensive book lists. Access a comprehensive physical library of standard textbooks alongside over 10,000+ digital e-books, formula guides, and self-study collections from any device.',
    img: '/g3.jpeg',
    icon: 'M12 21v-6m0 0l2.25-2.25M12 15l-2.25-2.25M12 15V3m6 6.75h1.5a3 3 0 013 3v4.5a3 3 0 01-3 3h-15a3 3 0 01-3-3v-4.5a3 3 0 013-3H6',
  },
  {
    title: 'Comprehensive Test Preparation',
    desc: 'Step up your exam readiness with our curated vault of past year papers (PYQs), core concept guides, and mock practice sets optimized to maximize your speed and scores.',
    img: '/g5.jpeg',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
  },
  {
    title: 'High-Speed Gigabit WiFi',
    desc: 'Experience uninterrupted learning with high-speed optical-fiber internet. Every study cabin features dedicated bandwidth ensuring zero-latency online classes and test streaming.',
    img: '/g8.jpeg',
    icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9 9 0 0114.14 0M3.34 9.172a15 15 0 0117.32 0',
  },
  {
    title: '24/7 AI-Powered CCTV Surveillance',
    desc: 'Study with absolute peace of mind. Continuous multi-floor security monitoring ensures a safe, disciplined, and quiet learning environment at all hours.',
    img: '/g7.jpeg',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white border border-slate-200 rounded-2xl p-8 space-y-6" aria-labelledby="services-heading">
      <div className="flex flex-col space-y-1">
        <h2 id="services-heading" className="text-xl font-bold text-ink tracking-tight">
          What We Offer
        </h2>
        <p className="text-sm text-slate-500">
          Premium self-study spaces, resources, and infrastructure designed to accelerate your preparation.
        </p>
      </div>

      <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <FadeUp key={s.title}>
          <div
            key={s.title}
            className="relative rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group [perspective:600px] hover:rotateX(1deg) hover:translateZ(2px)"
          >
            <div className="absolute inset-0">
              <img
                src={s.img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/30" />
            </div>

            <div className="relative z-10 p-5 space-y-3">
              <span className="flex w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm items-center justify-center text-amber-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.6">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </span>
              <h3 className="font-semibold text-white text-sm">{s.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
            </div>
          </div>
          </FadeUp>
        ))}
      </Stagger>
    </section>
  )
}
