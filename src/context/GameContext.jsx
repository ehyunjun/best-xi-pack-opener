import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { shopConfig } from '../data/shop.js';
import { loadUser, resetUser, saveUser } from '../storage/localStorage.js';
import { createPack, createRandomPack } from '../utils/packUtils.js';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [user, setUser] = useState(() => loadUser());

  const saveUserData = useCallback((updatedUser) => {
    setUser(updatedUser);
    saveUser(updatedUser);
  }, []);

  const resetGame = useCallback(() => {
    const defaultUser = resetUser();
    setUser(defaultUser);
    return defaultUser;
  }, []);

  const buyRandomPack = useCallback(() => {
    const price = shopConfig.randomPackPrice;

    if (user.gold < price) {
      return { ok: false, message: 'G가 부족합니다.' };
    }

    const newPack = createRandomPack();
    const updatedUser = {
      ...user,
      gold: user.gold - price,
      packs: [...user.packs, newPack],
    };

    saveUserData(updatedUser);
    return { ok: true, message: '랜덤 카드팩을 구매했습니다.' };
  }, [saveUserData, user]);

  const buyCountryPack = useCallback(
    (countryId) => {
      const price = shopConfig.countryPackPrice;

      if (user.gold < price) {
        return { ok: false, message: 'G가 부족합니다.' };
      }

      const newPack = createPack(countryId, 'country');
      const updatedUser = {
        ...user,
        gold: user.gold - price,
        packs: [...user.packs, newPack],
      };

      saveUserData(updatedUser);
      return { ok: true, message: '국가 카드팩을 구매했습니다.' };
    },
    [saveUserData, user],
  );

  const value = useMemo(
    () => ({
      user,
      setUser,
      saveUserData,
      resetGame,
      buyRandomPack,
      buyCountryPack,
    }),
    [buyCountryPack, buyRandomPack, resetGame, saveUserData, user],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }

  return context;
}
