const getKey = (key) => {
  return `${"react-local"}-${key}`;
};

export function setItem(key, value) {
  localStorage.setItem(getKey(key), value);
}

export function getItem(key, callback = null) {
  let localItem = localStorage.getItem(getKey(key));
  if (callback) {
    localItem = callback(localItem);
  }
  return JSON.parse(localItem);
}

export function removeItem(key) {
  return localStorage.removeItem(getKey(key));
}

export function clear() {
  return localStorage.clear();
}

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(getKey("app-state"));
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(getKey("app-state"), serializedState);
  } catch {
    console.log("useLocaleStorage error!!");
  }
};
