const exponentiate = (base, exponent) => {
  if (exponent === 0) {
    return 1
  }

  return base * exponentiate(base, exponent - 1)
}

module.exports = exponentiate
