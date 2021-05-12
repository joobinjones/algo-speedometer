module.exports = function algo2(/** parameters */) {
  const start = Date.now() / 1000;
  /**
   * YOUR ALGORITHM HERE BETWEEN START AND END
   */
  const end = Date.now() / 1000 - start;
  return Number(end.toFixed(5));
};
/**
 * you may consider unit testing your solutions before timing them...
 * trust
 */
