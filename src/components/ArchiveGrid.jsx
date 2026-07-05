export default function ArchiveGrid() {
  return (
    <section className="space-y-6">
      <header className="flex flex-col space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-ink">Explore the Archive</h2>
        <p className="text-sm text-slate-500">Discover study vaults organized for quick navigation and deep preparation.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CARD A — Wide */}
        <article className="md:col-span-2 relative bg-white border border-slate-200 rounded-2xl min-h-[280px] overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity">
            <img src="/g2.jpeg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative z-10 flex flex-col justify-end h-full p-6">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-100 max-w-sm">
              <h3 className="font-bold text-lg text-ink">Study Guides</h3>
              <p className="text-xs text-slate-600 mt-1">Structured roadmaps to help you master any subject from first principles.</p>
            </div>
          </div>
        </article>

        {/* CARD B — Tall Vertical */}
        <article className="row-span-2 relative bg-white border border-slate-200 rounded-2xl min-h-[400px] md:min-h-full overflow-hidden group">
          <div className="absolute inset-0 z-0">
            <img src="/g3.jpeg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />
          <div className="relative z-20 flex flex-col justify-end h-full p-6 text-white">
            <span className="text-[10px] font-bold tracking-widest uppercase text-emerald bg-white/90 text-ink px-2 py-0.5 rounded-full w-fit mb-2">
              Vault
            </span>
            <h3 className="font-bold text-xl">Research & References</h3>
            <p className="text-xs text-slate-300 mt-1">Peer-reviewed papers, academic citations, and deep-dive reference materials.</p>
          </div>
        </article>

        {/* CARD C — Square */}
        <article className="relative bg-white border border-slate-200 rounded-2xl min-h-[240px] overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40 transition-opacity">
            <img src="/g5.jpeg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative z-10 flex flex-col justify-end h-full p-6">
            <h3 className="font-bold text-base text-ink">Course Packs</h3>
            <p className="text-xs text-slate-600 mt-1">Pre-assembled learning modules, formula charts, and curated shortcut sheets for self-paced progress.</p>
          </div>
        </article>

        {/* CARD D — Square */}
        <article className="relative bg-white border border-slate-200 rounded-2xl min-h-[240px] overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-40 transition-opacity">
            <img src="/g6.jpeg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative z-10 flex flex-col justify-end h-full p-6">
            <h3 class="font-bold text-base text-ink">Exam Prep</h3>
            <p className="text-xs text-slate-600 mt-1">Targeted PYQs, mock practice sets, and speed drills to simulate real test conditions.</p>
          </div>
        </article>

        {/* CARD E — Wide Bottom Banner */}
        <article className="md:col-span-3 relative bg-white border border-slate-200 rounded-2xl min-h-[200px] overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <img src="/g9.jpeg" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="relative z-10 flex flex-col justify-center h-full p-6">
            <div className="max-w-xl space-y-2">
              <h3 className="font-bold text-lg text-ink">Self-Discipline Toolkit & Learning Frameworks</h3>
              <p className="text-xs text-slate-600">Proven systems and mental models to build consistency and sustain deep focus.</p>
              <a href="#" className="text-xs font-semibold text-emerald inline-flex items-center gap-1 hover:underline pt-2">
                Browse All Collections &rarr;
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
