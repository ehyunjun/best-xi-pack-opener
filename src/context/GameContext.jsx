import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { loadUser, resetUser, saveUser } from '../storage/localStorage.js';

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

  const value = useMemo(
    () => ({
      user,
      setUser,
      saveUserData,
      resetGame,
    }),
    [resetGame, saveUserData, user],
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
