const extractCodeFromUrl = url => {
  const codeRegex = /.*[?&]code=([^&]*)/;
  const matches = url.match(codeRegex);
  return matches ? matches[1] : null;
};

const stripQueryString = url => url.split('?')[0];

export { extractCodeFromUrl, stripQueryString };
