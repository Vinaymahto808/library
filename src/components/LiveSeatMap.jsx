import { useState } from 'react'
import useSeatStream from '../hooks/useSeatStream'

const STATUS_MAP = {
  available: { label: 'Available', dot: 'bg-emerald', badge: 'bg-emerald/10 text-emerald border-emerald/20' },
  occupied:  { label: 'Occupied',  dot: 'bg-rose-500', badge: 'bg-rose-500/10 text-rose-600 border-rose-500/20' },
  reserved:  { label: 'Reserved',  dot: 'bg-amber-400', badge: 'bg-amber-400/10 text-amber-600 border-amber-400/20' },
}

function timeAgo(ts) {
  if (!ts) return '—'
  const sec = Math.floor((Date.now() - ts) / 1000)
  if (sec < 5) return 'Just now'
  if (sec < 60) return `${sec}s ago`
  return `${Math.floor(sec / 60)}m ago`
}

export default function LiveSeatMap() {
  const { data, loading, error, refresh } = useSeatStream()
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  if (!data) {
    return (
      <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex items-center justify-center min-h-[300px]">
        <div className="text-center space-y-3">
          <span className="inline-flex gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-emerald animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-emerald animate-bounce" style={{ animationDelay: '300ms' }} />
          </span>
          <p className="text-sm text-slate-400">Loading live seat data...</p>
        </div>
      </section>
    )
  }

  const filtered = filter === 'all' ? data.cabins : data.cabins.filter((c) => c.status === filter)

  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6" aria-labelledby="seatmap-heading">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="card-tag text-xs">Live</span>
          <h2 id="seatmap-heading" className="text-xl font-bold text-ink tracking-tight mt-1">
            Seat Availability &mdash; Real-Time
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">Live cabin occupancy across all floors. Data refreshes every 30 seconds.</p>
        </div>
        <div className="flex items-center gap-4">
          {/* Last updated + error */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            {error && <span className="text-rose-500 font-medium">Connection error</span>}
            <span className="flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${error ? 'bg-rose-500' : loading ? 'bg-amber-400 animate-pulse' : 'bg-emerald'}`} />
              {timeAgo(data?.timestamp)}
            </span>
          </div>
          {/* Refresh button */}
          <button
            onClick={refresh}
            disabled={loading}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:text-ink hover:border-slate-300 transition-all disabled:opacity-50"
            aria-label="Refresh seat data"
          >
            <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          {/* Stats row */}
          <div className="flex gap-2 text-xs">
            {[
              { key: 'available', label: 'Available', count: data.available, color: 'bg-emerald' },
              { key: 'occupied',  label: 'Occupied',  count: data.occupied,  color: 'bg-rose-500' },
              { key: 'reserved',  label: 'Reserved',  count: data.reserved,  color: 'bg-amber-400' },
            ].map((s) => (
              <div key={s.key} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5">
                <span className={`w-2 h-2 rounded-full ${s.color}`} />
                <span className="font-medium text-ink">{s.count}</span>
                <span className="hidden sm:inline text-slate-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap">
        {[
          { key: 'all', label: `All (${data.total})` },
          { key: 'available', label: `Available (${data.available})` },
          { key: 'occupied', label: `Occupied (${data.occupied})` },
          { key: 'reserved', label: `Reserved (${data.reserved})` },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => { setFilter(f.key); setSelected(null) }}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
              filter === f.key
                ? 'bg-ink text-white border-ink'
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Cabin Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 [perspective:800px]">
        {filtered.map((cabin) => {
          const st = STATUS_MAP[cabin.status]
          const isSelected = selected === cabin.id

          return (
            <button
              key={cabin.id}
              onClick={() => setSelected(isSelected ? null : cabin.id)}
              className={`relative rounded-xl border p-4 text-left transition-all duration-200 [transform-style:preserve-3d] hover:rotateX(2deg) hover:translateZ(4px) ${
                isSelected
                  ? 'border-ink shadow-md ring-1 ring-ink'
                  : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
              }`}
              style={{ background: isSelected ? '#f8fafc' : '#fff' }}
            >
              <span className="absolute -bottom-1 -right-1 w-full h-full rounded-xl border border-slate-100 pointer-events-none" style={{ transform: 'translateZ(-4px)' }} />
              <span className="absolute -bottom-2 -right-2 w-full h-full rounded-xl border border-slate-50 pointer-events-none" style={{ transform: 'translateZ(-8px)' }} />

              <span className={`absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full ${st.dot}`} />

              <p className="text-sm font-bold text-ink">{cabin.id}</p>
              <p className="text-[0.65rem] text-slate-400 mt-0.5">{cabin.floor} floor</p>

              <span className={`inline-block text-[0.6rem] font-semibold px-1.5 py-0.5 rounded-full border mt-2 ${st.badge}`}>
                {st.label}
              </span>

              <div className="flex gap-1.5 mt-2 text-slate-300">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a9 9 0 0114.14 0" />
                </svg>
              </div>
            </button>
          )
        })}
      </div>

      {/* Selected cabin action bar */}
      {selected && (
        <div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 animate-fade-in">
          <div>
            <p className="text-sm font-semibold text-ink">Cabin {selected} selected</p>
            <p className="text-xs text-slate-400">
              {data.cabins.find((c) => c.id === selected)?.floor} floor &bull; Power outlet &amp; Wi-Fi included
            </p>
          </div>
          <button className="px-4 py-2 bg-emerald text-white text-sm font-medium rounded-lg hover:bg-[#0D635C] transition-all shadow-sm">
            Reserve Now
          </button>
        </div>
      )}

      {/* JSON data structure documentation */}
      <details className="text-xs text-slate-400 border-t border-slate-100 pt-4 mt-2">
        <summary className="cursor-pointer hover:text-ink transition-colors font-medium">
          API Response Schema
        </summary>
        <pre className="mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto text-[0.65rem] text-slate-600 leading-relaxed">
{`{
  "timestamp": ${data.timestamp},
  "total": ${data.total},
  "available": ${data.available},
  "occupied": ${data.occupied},
  "reserved": ${data.reserved},
  "cabins": [
    { "id": "A1", "floor": "Ground", "status": "available" },
    { "id": "A2", "floor": "Ground", "status": "occupied" },
    ...
  ]
}

// To replace with your real API:
// GET /api/seats
// Poll interval: 30s (configurable in hooks/useSeatStream.js)
// Status values: "available" | "occupied" | "reserved"`}
        </pre>
      </details>
    </section>
  )
}
