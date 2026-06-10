function formatAcquiredAt(acquiredAt) {
  if (!acquiredAt) {
    return '-';
  }

  return new Date(acquiredAt).toLocaleString('ko-KR');
}

function PackCard({ pack, country, onOpen, showOpenButton = false }) {
  const displayCountry = country ?? {
    code: '---',
    name: pack.countryId,
    packImage: '',
  };

  return (
    <article className="pack-card">
      <div className="pack-card__image-wrap">
        {displayCountry.packImage ? (
          <img className="pack-card__image" src={displayCountry.packImage} alt={`${displayCountry.name} pack`} />
        ) : (
          <span className="pack-card__image-fallback">No Image</span>
        )}
      </div>
      <div className="pack-card__body">
        <span className="pack-card__code">{displayCountry.code}</span>
        <h3>{displayCountry.name}</h3>
        <p>팩 타입: {pack.type}</p>
        <p>획득일: {formatAcquiredAt(pack.acquiredAt)}</p>
        {showOpenButton ? (
          <button className="pack-card__button" type="button" onClick={() => onOpen?.(pack)} disabled>
            개봉하기
          </button>
        ) : null}
      </div>
    </article>
  );
}

export default PackCard;
