import { createInitialPacks } from '../utils/packUtils.js';

const USER_STORAGE_KEY = 'bestxi_user';

export function createDefaultUser() {
  return {
    id: 'local-user',
    name: 'Guest',
    gold: 10000,
    packs: createInitialPacks(10),
    cards: [],
    squads: [],
  };
}

function isValidUser(user) {
  return (
    user &&
    typeof user === 'object' &&
    typeof user.id === 'string' &&
    typeof user.name === 'string' &&
    typeof user.gold === 'number' &&
    Array.isArray(user.packs) &&
    Array.isArray(user.cards) &&
    Array.isArray(user.squads)
  );
}

function persistDefaultUser() {
  const defaultUser = createDefaultUser();
  saveUser(defaultUser);
  return defaultUser;
}

export function loadUser() {
  const savedUser = localStorage.getItem(USER_STORAGE_KEY);

  if (!savedUser) {
    return persistDefaultUser();
  }

  try {
    const parsedUser = JSON.parse(savedUser);

    if (!isValidUser(parsedUser)) {
      return persistDefaultUser();
    }

    return parsedUser;
  } catch {
    return persistDefaultUser();
  }
}

export function saveUser(user) {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function resetUser() {
  return persistDefaultUser();
}
