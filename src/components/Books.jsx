import { Stagger, FadeUp } from './Reveal'

const BOOKS = [
  {
    title: 'The Deep Study Blueprint',
    cat: 'Self-Discipline Toolkit & Learning Frameworks',
    desc: 'Master focus, daily habits, and structured routines. This toolkit is designed to eliminate smartphone distractions and transform how you sustain consistency over long preparation cycles.',
    img: '/g9.jpeg',
  },
  {
    title: 'Core Concepts Master Pack',
    cat: 'Mathematics & Core Fundamentals',
    desc: 'Solidify your foundational knowledge. Features crystal-clear concept breakdowns, shortcut techniques, and progressive exercises to take you from basics to advanced problem-solving.',
    img: '/g10.jpeg',
  },
  {
    title: 'Practice & Progress Series',
    cat: 'Speed Drills & Exam Preparation',
    desc: 'Track measurable improvement. Access curated drills, rapid-calculation reviews, and real-world exam challenges tailored specifically for competitive exam patterns.',
    img: 'https://images.unsplash.com/photo-1589998059171-988d848dfa2b?w=400&q=85&fit=crop&h=600',
  },
  {
    title: 'Archive Notes: Skills Edition',
    cat: 'Quick-Reference Materials & Course Packs',
    desc: 'A high-yield reference vault of pre-assembled learning modules, formula charts, and curated shortcut sheets perfect for last-minute revisions.',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&q=85&fit=crop&h=600',
  },
]

export default function Books() {
  return (
    <section id="books" className="space-y-8" aria-labelledby="books-heading">
      <header className="flex flex-col space-y-2">
        <h2 id="books-heading" className="text-xl font-bold text-ink tracking-tight">
          Featured Collections
        </h2>
        <p className="text-sm text-slate-500">
          Curated study vaults designed to accelerate your preparation across every exam track.
        </p>
      </header>

      <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-5 [perspective:1000px]">
        {BOOKS.map((book) => (
          <FadeUp key={book.title}>
          <div
            key={book.title}
            className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer [transform-style:preserve-3d] hover:rotateY(-4deg) hover:translateZ(8px)"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none" style={{ transform: 'translateZ(2px)' }} />

            <div className="absolute bottom-0 left-0 right-0 p-4 z-10" style={{ transform: 'translateZ(6px)' }}>
              <span className="text-[0.55rem] font-semibold text-amber-300/80 uppercase tracking-widest">{book.cat}</span>
              <h3 className="text-sm font-bold text-white leading-snug mt-0.5">{book.title}</h3>
              <p className="text-xs text-slate-300 mt-0.5">{book.desc}</p>
              <span className="inline-block mt-2 text-[0.6rem] font-semibold text-amber-300/80 uppercase tracking-wider group-hover:text-amber-300 transition-colors">
                View Details &rarr;
              </span>
            </div>
          </div>
          </FadeUp>
        ))}
      </Stagger>
    </section>
  )
}
