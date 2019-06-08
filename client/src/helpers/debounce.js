const debounce = (fn, ms) => {
  let timeout;
  return e => {
    clearTimeout(timeout);
    e.persist();
    timeout = setTimeout(() => fn(e), ms);
  };
};

export default debounce;
