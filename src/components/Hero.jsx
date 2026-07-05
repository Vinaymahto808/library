import { useRef, useEffect, useState } from 'react'

export default function Hero() {
  const cardRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [mouseInside, setMouseInside] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const handleMouse = (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setTilt({ x: (x - 0.5) * 12, y: (y - 0.5) * -12 })
    }

    el.addEventListener('mousemove', handleMouse)
    el.addEventListener('mouseenter', () => setMouseInside(true))
    el.addEventListener('mouseleave', () => { setMouseInside(false); setTilt({ x: 0, y: 0 }) })
    return () => el.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center [perspective:1200px]">
      {/* Left: Text */}
      <div className="lg:col-span-5 space-y-6 [transform-style:preserve-3d]">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald/10 text-emerald"
          style={{ transform: `translateZ(30px)` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
          Nav Uday Library — Mathematics & Competition Hub
        </span>
        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-ink leading-[1.1]"
          style={{ transform: `translateZ(50px)` }}
        >
          <span className="text-emerald">Silence</span> the<br />
          <span className="text-emerald">Noise</span>.<br />
          <span className="text-2xl sm:text-3xl text-slate-400 font-semibold">Own Your Preparation</span>
        </h1>
        <p
          className="text-base text-slate-500 max-w-md leading-relaxed"
          style={{ transform: `translateZ(20px)` }}
        >
          Premium, distraction-free study cabins and comprehensive exam resources engineered for serious Class 11&ndash;12, Railway, SSC CGL, CHSL, and JEE aspirants.
        </p>
        <div
          className="flex flex-wrap gap-4"
          style={{ transform: `translateZ(40px)` }}
        >
          <a href="#contact" className="px-5 py-2.5 bg-emerald text-white font-medium rounded-lg text-sm hover:bg-[#0D635C] shadow-sm transition-all">
            Reserve Your Private Cabin
          </a>
          <a href="#" className="px-5 py-2.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-lg text-sm hover:bg-slate-50 transition-all">
            View Flexible Memberships
          </a>
        </div>

        {/* Hero highlights */}
        <div className="flex flex-col gap-3" style={{ transform: `translateZ(15px)` }}>
          {[
            { icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25', text: 'Exam-Ready Environment — Tailored for Railway, SSC CGL, CHSL, and JEE aspirants.' },
            { icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', text: 'Premium Resources — Comprehensive study materials and silent cabins optimized for results.' },
            { icon: 'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719', text: '5,000+ Strong — Join a massive community of serious students tracking toward success.' },
          ].map((h, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="flex w-7 h-7 rounded-md bg-emerald/10 items-center justify-center text-emerald shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d={h.icon} />
                </svg>
              </span>
              <span className="text-xs text-slate-500 leading-snug">{h.text}</span>
            </div>
          ))}
        </div>

        {/* Floating book decoration — bottom left */}
        <div
          className="absolute -bottom-8 -left-6 w-16 h-20 text-emerald/15 pointer-events-none hidden lg:block"
          style={{ transform: `translateZ(10px) rotateX(12deg) rotateY(-8deg)` }}
        >
          <svg viewBox="0 0 40 48" fill="currentColor" className="w-full h-full">
            <path d="M8 4a4 4 0 00-4 4v32a4 4 0 004 4h24a4 4 0 004-4V8a4 4 0 00-4-4H8zm0 4h24v28H8V8zm4 4v4h16v-4H12zm0 8v4h16v-4H12zm0 8v4h10v-4H12z" />
          </svg>
        </div>
      </div>

      {/* Right: 3D Tilt Image */}
      <div className="lg:col-span-7 [transform-style:preserve-3d]">
        <div
          ref={cardRef}
          className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-200 transition-[transform,box-shadow] duration-200 ease-out cursor-pointer"
          style={{
            transform: mouseInside
              ? `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale3d(1.02,1.02,1.02)`
              : 'rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
            boxShadow: mouseInside
              ? '0 25px 50px -12px rgba(0,0,0,0.25)'
              : '0 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/g1.jpeg"
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          {/* Glass reflection overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: mouseInside
                ? `linear-gradient(${tilt.x + 20}deg, rgba(255,255,255,0.08) 0%, transparent 50%)`
                : 'none',
              transition: 'background 0.2s ease',
            }}
          />

          {/* Floating 3D book — top right */}
          <div
            className="absolute -top-4 -right-4 w-14 h-18 text-white/40 pointer-events-none"
            style={{
              transform: `translateZ(40px) rotateY(${mouseInside ? tilt.x * 0.5 : 0}deg)`,
              transition: 'transform 0.2s ease',
            }}
          >
            <svg viewBox="0 0 36 44" fill="currentColor" className="w-full h-full drop-shadow-lg">
              <path d="M6 2a4 4 0 00-4 4v32a4 4 0 004 4h24a4 4 0 004-4V6a4 4 0 00-4-4H6zm0 4h24v28H6V6zm2 4v4h20v-4H8zm0 8v4h20v-4H8zm0 8v4h14v-4H8z" />
            </svg>
          </div>

          {/* Floating 3D book — bottom right */}
          <div
            className="absolute -bottom-3 -right-2 w-10 h-14 text-white/20 pointer-events-none"
            style={{
              transform: `translateZ(60px) rotateY(${mouseInside ? tilt.x * -0.7 : -10}deg) rotateX(8deg)`,
              transition: 'transform 0.2s ease',
            }}
          >
            <svg viewBox="0 0 36 44" fill="currentColor" className="w-full h-full drop-shadow-lg">
              <path d="M6 2a4 4 0 00-4 4v32a4 4 0 004 4h24a4 4 0 004-4V6a4 4 0 00-4-4H6zm0 4h24v28H6V6zm2 4v4h20v-4H8zm0 8v4h20v-4H8zm0 8v4h14v-4H8z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
