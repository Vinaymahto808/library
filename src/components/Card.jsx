export default function Card({ tag, title, description, src, alt, variant, className }) {
  const variantClass = variant === 'tall' ? 'img-card--tall' : variant === 'wide' ? 'img-card--wide' : ''

  return (
    <article className={`img-card ${variantClass} ${className ?? ''}`}>
      <div className="img-wrap">
        <img
          src={src}
          alt={alt}
          loading="lazy"
        />
      </div>
      <div className="card-body p-5 lg:p-6">
        <span className="card-tag">{tag}</span>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>
    </article>
  )
}
