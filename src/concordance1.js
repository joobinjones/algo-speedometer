/**
 *
 * @param {Array} data - an array of strings that are formatted like sentences
 * @returns {Object} a concordance of the words
 */
function concordance1(data) {
  const start = Date.now();
  const dataLength = data.length;
  for (let i = 0; i < dataLength; i++) {
    data[i] = new Set(data[i].split(/[\s.,';]/));
  }

  const result = {};

  for (let i = 0; i < dataLength; i++) {
    data[i].forEach((word) => {
      if (word) {
        word = word.toLowerCase();
        if (result[word]) {
          result[word].push(i);
        } else {
          result[word] = [i];
        }
      }
    });
  }

  //   return result;
  const end = Date.now() - start;
  return Number(end.toFixed(5));
}

module.exports = concordance1;
