export default function Book({ variant, extraClass, unpublished, isActive, anyActive, onOpen, onClose, titles, children }) {
  return (
    <div
      className={[
        'book',
        `book--${variant}`,
        extraClass,
        unpublished && 'unpublished',
        isActive && 'active',
      ].filter(Boolean).join(' ')}
      onClick={!isActive ? onOpen : undefined}
    >
      <div className={`book__shading book__shading--${variant}`}></div>
      <div className="book__inside_shading"></div>

      {titles.map(({ text, titleClass }) => (
        <h2 key={text} className={`book__title ${titleClass}${anyActive ? ' hidden' : ''}`}>
          {text}
        </h2>
      ))}

      <div className="book__contents">
        <div className="btn btn--back" onClick={(e) => { e.stopPropagation(); onClose() }}>
          <p>BACK</p>
          <svg width="10" height="10" viewBox="0 0 100 100">
            <path strokeWidth="15" stroke="#222" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M75,15 L15, 50 L75, 85" />
          </svg>
        </div>
        {children}
      </div>
    </div>
  )
}
