import { useState } from 'react';
import GoldBadge from '../components/common/GoldBadge.jsx';
import { countries } from '../data/countries.js';
import { shopConfig } from '../data/shop.js';
import { useGame } from '../context/GameContext.jsx';

function ShopPage() {
  const { buyCountryPack, buyRandomPack, user } = useGame();
  const [purchaseMessage, setPurchaseMessage] = useState(null);

  const handleRandomPackPurchase = () => {
    setPurchaseMessage(buyRandomPack());
  };

  const handleCountryPackPurchase = (countryId) => {
    setPurchaseMessage(buyCountryPack(countryId));
  };

  return (
    <section className="page-section">
      <p className="page-section__kicker">Shop</p>
      <h2>상점</h2>
      <div className="shop-toolbar">
        <p>카드팩을 구매해 팩 보관함에 추가할 수 있습니다. 개봉 기능은 다음 작업에서 구현합니다.</p>
        <GoldBadge gold={user.gold} />
      </div>
      {purchaseMessage ? (
        <p className={purchaseMessage.ok ? 'shop-message shop-message--success' : 'shop-message shop-message--error'}>
          {purchaseMessage.message}
        </p>
      ) : null}
      <div className="shop-section">
        <div>
          <p className="page-section__kicker">Random Pack</p>
          <h3>랜덤 카드팩</h3>
          <p>16개 국가 중 하나의 카드팩을 무작위로 구매합니다.</p>
        </div>
        <div className="shop-section__action">
          <span className="shop-price">{shopConfig.randomPackPrice.toLocaleString()} G</span>
          <button className="shop-button" type="button" onClick={handleRandomPackPurchase}>
            랜덤 카드팩 구매
          </button>
        </div>
      </div>
      <div className="shop-section">
        <div className="shop-section__heading">
          <p className="page-section__kicker">Country Pack</p>
          <h3>국가 선택 카드팩</h3>
          <p>원하는 국가의 카드팩을 선택해 구매합니다.</p>
        </div>
        <div className="country-shop-grid">
          {countries.map((country) => (
            <article className="country-shop-card" key={country.id}>
              <div className="country-shop-card__image-wrap">
                <img className="country-shop-card__image" src={country.packImage} alt={`${country.name} pack`} />
              </div>
              <div className="country-shop-card__body">
                <span className="pack-card__code">{country.code}</span>
                <h4>{country.name}</h4>
                <span className="shop-price">{shopConfig.countryPackPrice.toLocaleString()} G</span>
                <button className="shop-button" type="button" onClick={() => handleCountryPackPurchase(country.id)}>
                  구매
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
