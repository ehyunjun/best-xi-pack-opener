import PackCard from './PackCard.jsx';

function PackGrid({ packs, countries, showOpenButton = false }) {
  if (!packs.length) {
    return <p className="empty-message">보유한 카드팩이 없습니다.</p>;
  }

  return (
    <div className="pack-grid">
      {packs.map((pack) => {
        const country = countries.find((item) => item.id === pack.countryId);

        return <PackCard country={country} key={pack.id} pack={pack} showOpenButton={showOpenButton} />;
      })}
    </div>
  );
}

export default PackGrid;
