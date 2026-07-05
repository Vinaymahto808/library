export default function LibraryCard({ bannerImage, title, subtitle }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md group">
      <div className="aspect-video w-full overflow-hidden relative">
        <img
          src={bannerImage}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-10">
          <h3 className="text-white font-semibold text-lg tracking-wide truncate">
            {title}
          </h3>
          {subtitle && (
            <p className="text-slate-300 text-sm font-medium mt-0.5 truncate">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
