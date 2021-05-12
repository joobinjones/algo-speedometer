/**
 *
 * @param {Array} data - an array of strings that are formatted like sentences
 * @returns {Object} a concordance of the words
 */
function concordance2(data) {
  const start = Date.now();

  const result = {};
  for (let i = 0; data.length > i; i++) {
    let sentence = data[i];
    const index = i;
    sentence = sentence.toLowerCase();
    sentence = sentence.split(/[\s.,';]/);

    for (let word of sentence) {
      if (!result[word]) {
        result[word] = new Set([index]);
      } else {
        result[word].add(index);
      }
    }
  }

  for (let value in result) {
    result[value] = Array.from(result[value]);
  }

  const end = Date.now() - start;
  return Number(end.toFixed(5));
  // return result;
}
module.exports = concordance2;
