export function isCached(name) {
  const cacheKey = buildKey(name);
  return window.localStorage.getItem(cacheKey) !== null;
}

export function getCached(name) {
  const cacheKey = buildKey(name);
  return JSON.parse(window.localStorage.getItem(cacheKey));
}

export function setCached(name, value) {
  const cacheKey = buildKey(name);
  window.localStorage.setItem(cacheKey, JSON.stringify(value));
}

const buildKey = name => {
  return `GITHUB_CACHE_KEY_${name}`;
};
