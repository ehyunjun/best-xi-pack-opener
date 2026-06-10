import PackGrid from '../components/pack/PackGrid.jsx';
import { useGame } from '../context/GameContext.jsx';
import { countries } from '../data/countries.js';

function PackInventoryPage() {
  const { user } = useGame();

  return (
    <section className="page-section">
      <p className="page-section__kicker">Pack Inventory</p>
      <h2>팩 보관함</h2>
      <p>보유한 카드팩 목록을 확인할 수 있는 페이지입니다. 카드팩 개봉 기능은 이후 구현합니다.</p>
      <p className="page-section__meta">현재 보유 카드팩: {user.packs.length}개</p>
      <PackGrid countries={countries} packs={user.packs} showOpenButton />
    </section>
  );
}

export default PackInventoryPage;
