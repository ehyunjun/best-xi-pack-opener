import { useGame } from '../context/GameContext.jsx';

function HomePage() {
  const { resetGame, user } = useGame();

  return (
    <section className="page-section">
      <p className="page-section__kicker">Home</p>
      <h2>홈</h2>
      <p>축구 카드팩을 열고 선수를 수집해 나만의 Best XI 스쿼드를 만드는 시작 화면입니다.</p>
      <dl className="summary-grid">
        <div className="summary-card">
          <dt>현재 보유 G</dt>
          <dd>{user.gold.toLocaleString()} G</dd>
        </div>
        <div className="summary-card">
          <dt>보유 카드팩 수</dt>
          <dd>{user.packs.length}</dd>
        </div>
        <div className="summary-card">
          <dt>보유 선수 카드 수</dt>
          <dd>{user.cards.length}</dd>
        </div>
        <div className="summary-card">
          <dt>저장한 스쿼드 수</dt>
          <dd>{user.squads.length}</dd>
        </div>
      </dl>
      <button className="page-button" type="button" onClick={resetGame}>
        게임 초기화
      </button>
    </section>
  );
}

export default HomePage;
