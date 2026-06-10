import { useGame } from '../context/GameContext.jsx';

function CardInventoryPage() {
  const { user } = useGame();

  return (
    <section className="page-section">
      <p className="page-section__kicker">Card Inventory</p>
      <h2>카드 보관함</h2>
      <p>수집한 선수 카드들을 포지션, 능력치, 등급별로 살펴볼 수 있는 페이지입니다.</p>
      {user.cards.length === 0 ? (
        <p className="empty-message">아직 획득한 선수 카드가 없습니다.</p>
      ) : (
        <ul className="plain-list">
          {user.cards.map((card) => (
            <li className="plain-list__item" key={card.id}>
              <strong>{card.name}</strong>
              <span>{card.detailPosition}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default CardInventoryPage;
