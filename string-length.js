const stringLength = (str) => {
  if (str.length > 0 && str.length <= 10) {
    return true;
  }
  return false;
}
console.log(stringLength(''))

module.exports = stringLength
