/**
 * faker lib @https://github.com/marak/Faker.js/
 */
const faker = require("faker");
/**
 *
 * @param {Number} dataPoints
 * @returns {Object} data to be used in the algos.
 */
module.exports = async function (dataPoints = 10000) {
  const input = [];
  for (let i = 0; i < dataPoints; i++) {
    input.push(await faker.lorem.sentences().replaceAll(".", ""));
  }
  return input;
};
