import { useGame } from '../context/GameContext.jsx';

function PackInventoryPage() {
  const { user } = useGame();

  return (
    <section className="page-section">
      <p className="page-section__kicker">Pack Inventory</p>
      <h2>팩 보관함</h2>
      <p>보유한 카드팩 목록을 확인할 수 있는 페이지입니다. 카드팩 개봉 기능은 이후 구현합니다.</p>
      <ul className="plain-list">
        {user.packs.map((pack) => (
          <li className="plain-list__item" key={pack.id}>
            <strong>{pack.countryId}</strong>
            <span>타입: {pack.type}</span>
            <span>획득일: {pack.acquiredAt}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PackInventoryPage;
